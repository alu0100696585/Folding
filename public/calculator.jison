 /* description: Parses end executes mathematical expressions. */

%{
var symbol_table = {};

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
    | PROCEDURE ID '(' arg ')' ';' block ';'
       { $$ = { type: 'procedure' , left: $2, argumentos: $4 , right: $7 }; }
    ;
   
constt
    : /* empty */
    | CONST cvrb
	{ $$ = {type: 'CONST' , constantes: $2}; }
    ;

cvrb
    : ID '=' NUMBER ';'
      {
	$$ = {type: '=', left: $1 , right: $3};
      }
    | ID '=' NUMBER COMMA cvrb
      { 
	$$ = [{type: '=', left: $1 , right: $3}];
	$$ = $$.concat($5);
      }
    ;

vaar
    : /* empty */
    | VAR vrb
      { $$ = {type: 'VAR' , variables: $2} }
    ;
vrb 
    : ID ';'
      {$$ = [$1];}
    | ID COMMA vrb
      { 
	$$ = [{type: 'VAR', id:$1 }];
	$$ = $$.concat($3);
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
        { $$ = {type: 'call' , id:$2 , lista: $4} }
    ;
    
arg
    : /* empty */
      {$$ = [];}
    | ID 
      {$$ = [$1];} 
    | ID COMMA arg
      {$$ = [$1].concat($3);} 
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
        { symbol_table[$1] = $$ = {type:'ID' , left:$3}; }
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
        { $$ = symbol_table[yytext] || $1; }
    ;

