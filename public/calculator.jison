 /* description: Parses end executes mathematical expressions. */

%{

var symbolTables = [{name: 'global', father: null , vars: {}}];

var scope = 0;

var symbol_table = symbolTables[scope];

function get_Scope(){
  return scope;
}

function makeScope(id){

  scope++;
  symbolTables.push({name: id, father: symbol_table.name, vars: {}});
  symbol_table = symbolTables[scope];

}

function scopeUp(){
  scope--;
  return scope;
}

function findDef(id){

  var f = id;
  var s = scope;
  
  while(s >= 0){
    for (var i in symbolTables[s].vars){
      if(i == f)
	return;
    }
    s--;
  }
   
  throw new Error( f + " is not defined.");

}

function fact (n) { 
  return n==0 ? 1 : fact(n-1) * n 
}
%}

%token  IF THEN COMPARISON NUMBER ID E PI EOF WHILE DO ELSE BEGIN END CALL COMMA VAR ODD CONST PROCEDURE
/* operator associations and precedence */

%right ELSE THEN
%right '='
%left '+' '-'
%left '*' '/'
%left '^'
%right '%'
%left UMINUS
%left '!'

%start prog

%% /* language grammar */
prog
    :block DOT EOF
        { 
          $$ = $1; 
          console.log($$);
          return [$$, symbol_table];
        }
    ;
    
block
    : constt vaar proc st
      { $$ = { cnst:$1 , V:$2 , proc:$3, st:$4 };}
    ;
    
proc
    : /* empty */
    | PROCEDURE name '(' pargsp ')' ';' block ';'
       { $$ = { type: 'procedure' , left: $2, argumentos: $4 , right: $7 }; }
    ;
   

pargsp
    : '(' arg ')'
      {
	$$ = $1;
      }
    ;

name 
    : ID
      {
	$$ = $1;
	makeScope($1);
      }
    ;
    
constt
    : /* empty */
    | CONST cvrb
	{ 
	  $$ = {type: 'CONST' , constantes: $2};
	}
    ;

cvrb
    : ID '=' NUMBER ';'
      {
	$$ = {type: '=', left: $1 , right: $3};
	symbol_table.vars[$1] = {type: 'const', valor: $3};
      }
    | ID '=' NUMBER COMMA cvrb
      { 
	$$ = [{type: '=', left: $1 , right: $3}];
	$$ = $$.concat($5);
	symbol_table.vars[$1] = {type: 'const', valor: $3};
      }
    ;

vaar
    : /* empty */
    | VAR vrb
      { $$ = {type: 'VAR' , variables: $2}; }
    ;
vrb 
    : ID ';'
      {
	$$ = [$1];
	symbol_table.vars[$1] = {type: 'var'};
      }
    | ID COMMA vrb
      { 
	$$ = [{type: 'VAR', id:$1 }];
	$$ = $$.concat($3);
	symbol_table.vars[$1] = {type: 'var'};
      }
    ;

expressions
    : st  
        { $$ = (typeof $1 === 'undefined')? [] : [ $1 ]; }
    | expressions ';' st
        { $$ = $1;
          if ($3) $$.push($3); 
          console.log($$);
        }
    ;

st
    : /* empty */
    | e
    | IF condition THEN st ELSE st
        {$$ = {type: 'ifelse', condicion: $2 , if: $4 , else: $6};}
    | IF condition THEN st 
        {$$ = {type: 'if', condicion: $2 , if: $4};}
    | WHILE condition DO st
        {$$ = {type:'while', condicion: $2 , do: $4};}
    | BEGIN expressions ';' END
        {$$ = $2;}
    | CALL ID '(' llamada ')'
        { $$ = {type: 'call' , id:$2 , lista: $4}; }
    ;
    
arg
    : /* empty */
      {$$ = [];}
    | ID 
      {
	$$ = [$1];
	symbol_table.vars[$1] = {type: 'var'};
      } 
    | ID COMMA arg
      {
	$$ = [$1].concat($3);
	symbol_table.vars[$1] = {type: 'var'};
      } 
    ;
    
llamada
    : /* empty */ 
       {$$ = [];}
    | e 
      {$$ = [$1];} 
    | e COMMA llamada
       {$$ = [$1].concat($3);}
    ;
    
condition
    : NUMBER COMPARISON NUMBER
        {
	 $$ = { type: $2 , left: $1 , right:$3 }; 
	}
    | ID COMPARISON NUMBER
        {
	 $$ = { type: $2 , left: $1 , right:$3 }; 
	}
    | ID COMPARISON ID
        {
	 $$ = { type: $2 , left: $1 , right:$3 }; 
	}
    | ODD e 
        {$$ = {type: 'odd', odd: $2};}
    ;

e
    : ID '=' e
        { $$ = {type:'ID' , left:$3}; }
    | PI '=' e 
        { throw new Error("Can't assign to constant 'π'"); }
    | E '=' e 
        { throw new Error("Can't assign to math constant 'e'"); }
    | e '+' e
        {$$ = {type: $2 , left: $1 , right: $3};}
    | e '-' e
        {$$ = {type: $2 , left: $1 , right: $3};}
    | e '*' e
        {$$ = {type: $2 , left: $1 , right: $3};}
    | e '/' e
        {
          if ($3 == 0) throw new Error("Division by zero, error!");
          $$ = {type: $2 , left: $1 , right: $3};;
        }
    | e '^' e
        {$$ = {type: $2 , left: $1 , right: $3};}
    | e '!'
        {
          if ($1 % 1 !== 0) 
             throw "Error! Attempt to compute the factorial of "+
                   "a floating point number "+$1;
          $$ = {type: $2 , left: $1};
        }
    | e '%'
        {$$ = {type: $2 , left: $1 , right: 100};}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    | ID 
        { $$ = $1; }
    ;

