/* parser generated by jison 0.4.4 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var calculator = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"prog":3,"block":4,"DOT":5,"EOF":6,"constt":7,"vaar":8,"procc":9,"st":10,"proc":11,"PROCEDURE":12,"name_arg":13,";":14,"name":15,"(":16,"pargsp":17,")":18,"arg":19,"ID":20,"CONST":21,"cvrb":22,"=":23,"NUMBER":24,"COMMA":25,"VAR":26,"vrb":27,"expressions":28,"e":29,"IF":30,"condition":31,"THEN":32,"ELSE":33,"WHILE":34,"DO":35,"BEGIN":36,"END":37,"CALL":38,"llamada":39,"COMPARISON":40,"ODD":41,"PI":42,"E":43,"+":44,"-":45,"*":46,"/":47,"^":48,"!":49,"%":50,"$accept":0,"$end":1},
terminals_: {2:"error",5:"DOT",6:"EOF",12:"PROCEDURE",14:";",16:"(",18:")",20:"ID",21:"CONST",23:"=",24:"NUMBER",25:"COMMA",26:"VAR",30:"IF",32:"THEN",33:"ELSE",34:"WHILE",35:"DO",36:"BEGIN",37:"END",38:"CALL",40:"COMPARISON",41:"ODD",42:"PI",43:"E",44:"+",45:"-",46:"*",47:"/",48:"^",49:"!",50:"%"},
productions_: [0,[3,3],[4,4],[9,0],[9,2],[11,5],[13,4],[17,1],[15,1],[7,0],[7,2],[22,4],[22,5],[8,0],[8,2],[27,2],[27,3],[28,1],[28,3],[10,0],[10,1],[10,6],[10,4],[10,4],[10,4],[10,5],[19,0],[19,1],[19,3],[39,0],[39,1],[39,3],[31,3],[31,3],[31,3],[31,2],[29,3],[29,3],[29,3],[29,3],[29,3],[29,3],[29,3],[29,3],[29,2],[29,2],[29,2],[29,3],[29,1],[29,1],[29,1],[29,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: 
          var table = symbolTables;
          
          symbolTables = [{name: 'global', father: null , vars: {}}];
          scope = 0;
	  symbol_table = symbolTables[scope];
          
          
          this.$ = $$[$0-2]; 
          return [this.$, table];
        
break;
case 2: this.$ = { cnst:$$[$0-3] , V:$$[$0-2] , proc:$$[$0-1], st:$$[$0] };
break;
case 4:
          this.$ = [$$[$0-1]];
          if ($$[$0]) 
             this.$ = this.$.concat($$[$0]);
        
break;
case 5: 
	  this.$ = { type: 'procedure' , nombre: $$[$0-3][0], argumentos: $$[$0-3][1] , right: $$[$0-1], symboltable: symbolTables.pop() }; 
	  scopeUp();
	
break;
case 6:
        
	symbol_table.vars[$$[$0-3]] = {type: 'proc', longitud: $$[$0-1].length};
	makeScope($$[$0-3]);
	
	for(var i = 0; i < $$[$0-1].length; i++ ){
	  symbol_table.vars[$$[$0-1][i]] = {type: 'var'};
        }
        
        
	this.$ = [$$[$0-3]];
	if($$[$0-1]) this.$.concat($$[$0-1]);
      
break;
case 7:
	this.$ = $$[$0];
      
break;
case 8:
	this.$ = $$[$0];
      
break;
case 10: 
	  this.$ = {type: 'CONST' , constantes: $$[$0]};
	
break;
case 11:
        symbol_table.vars[$$[$0-3]] = {type: 'const', valor: $$[$0-1]};
	this.$ = {type: '=', left: $$[$0-3] , right: $$[$0-1]};
      
break;
case 12: 
	symbol_table.vars[$$[$0-4]] = {type: 'const', valor: $$[$0-2]};
	this.$ = [{type: '=', left: $$[$0-4] , right: $$[$0-2]}];
	this.$ = this.$.concat($$[$0]);
      
break;
case 14: this.$ = {type: 'VAR' , variables: $$[$0]}; 
break;
case 15:
        symbol_table.vars[$$[$0-1]] = {type: 'var'};
	this.$ = [$$[$0-1]];
      
break;
case 16: 
        symbol_table.vars[$$[$0-2]] = {type: 'var'};
	this.$ = [{type: 'VAR', id:$$[$0-2] }];
	this.$ = this.$.concat($$[$0]);
      
break;
case 17: this.$ = (typeof $$[$0] === 'undefined')? [] : [ $$[$0] ]; 
break;
case 18: this.$ = $$[$0-2];
          if ($$[$0]) this.$.push($$[$0]); 
        
break;
case 21:this.$ = {type: 'ifelse', condicion: $$[$0-4] , if: $$[$0-2] , else: $$[$0]};
break;
case 22:this.$ = {type: 'if', condicion: $$[$0-2] , if: $$[$0]};
break;
case 23:this.$ = {type:'while', condicion: $$[$0-2] , do: $$[$0]};
break;
case 24:this.$ = $$[$0-2];
break;
case 25: 
	  findDefProc($$[$0-3])
	  this.$ = {type: 'call' , id:$$[$0-3] , lista: $$[$0-1]}; 
break;
case 26:this.$ = [];
break;
case 27:
	this.$ = [$$[$0]];
      
break;
case 28:
	this.$ = [$$[$0-2]].concat($$[$0]);
      
break;
case 29:this.$ = [];
break;
case 30:this.$ = [$$[$0]];
break;
case 31:this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 32:
	 this.$ = { type: $$[$0-1] , left: $$[$0-2] , right:$$[$0] }; 
	
break;
case 33:
        findDef($$[$0-2]);
	 this.$ = { type: $$[$0-1] , left: $$[$0-2] , right:$$[$0] }; 
	
break;
case 34:
        findDef($$[$0-2]);
        findDef($$[$0]);
	 this.$ = { type: $$[$0-1] , left: $$[$0-2] , right:$$[$0] }; 
	
break;
case 35:this.$ = {type: 'odd', odd: $$[$0]};
break;
case 36: 
          findDefvar($$[$0-2]);
	  this.$ = {type:'ID', nombre:$$[$0-2] , left:$$[$0]}; 
	
break;
case 37: throw new Error("Can't assign to constant 'π'"); 
break;
case 38: throw new Error("Can't assign to math constant 'e'"); 
break;
case 39:this.$ = {type: $$[$0-1] , left: $$[$0-2] , right: $$[$0]};
break;
case 40:this.$ = {type: $$[$0-1] , left: $$[$0-2] , right: $$[$0]};
break;
case 41:this.$ = {type: $$[$0-1] , left: $$[$0-2] , right: $$[$0]};
break;
case 42:
          if ($$[$0] == 0) throw new Error("Division by zero, error!");
          this.$ = {type: $$[$0-1] , left: $$[$0-2] , right: $$[$0]};;
        
break;
case 43:this.$ = {type: $$[$0-1] , left: $$[$0-2] , right: $$[$0]};
break;
case 44:
          if ($$[$0-1] % 1 !== 0) 
             throw "Error! Attempt to compute the factorial of "+
                   "a floating point number "+$$[$0-1];
          this.$ = {type: $$[$0] , left: $$[$0-1]};
        
break;
case 45:this.$ = {type: $$[$0] , left: $$[$0-1] , right: 100};
break;
case 46:this.$ = -$$[$0];
break;
case 47:this.$ = $$[$0-1];
break;
case 48:this.$ = Number(yytext);
break;
case 49:this.$ = Math.E;
break;
case 50:this.$ = Math.PI;
break;
case 51: 
	  findDef($$[$0]);
	  this.$ = $$[$0]; 
        
break;
}
},
table: [{3:1,4:2,5:[2,9],7:3,12:[2,9],16:[2,9],20:[2,9],21:[1,4],24:[2,9],26:[2,9],30:[2,9],34:[2,9],36:[2,9],38:[2,9],42:[2,9],43:[2,9],45:[2,9]},{1:[3]},{5:[1,5]},{5:[2,13],8:6,12:[2,13],14:[2,13],16:[2,13],20:[2,13],24:[2,13],26:[1,7],30:[2,13],34:[2,13],36:[2,13],38:[2,13],42:[2,13],43:[2,13],45:[2,13]},{20:[1,9],22:8},{6:[1,10]},{5:[2,3],9:11,11:12,12:[1,13],14:[2,3],16:[2,3],20:[2,3],24:[2,3],30:[2,3],34:[2,3],36:[2,3],38:[2,3],42:[2,3],43:[2,3],45:[2,3]},{20:[1,15],27:14},{5:[2,10],12:[2,10],14:[2,10],16:[2,10],20:[2,10],24:[2,10],26:[2,10],30:[2,10],34:[2,10],36:[2,10],38:[2,10],42:[2,10],43:[2,10],45:[2,10]},{23:[1,16]},{1:[2,1]},{5:[2,19],10:17,14:[2,19],16:[1,27],20:[1,23],24:[1,28],29:18,30:[1,19],34:[1,20],36:[1,21],38:[1,22],42:[1,24],43:[1,25],45:[1,26]},{5:[2,3],9:29,11:12,12:[1,13],14:[2,3],16:[2,3],20:[2,3],24:[2,3],30:[2,3],34:[2,3],36:[2,3],38:[2,3],42:[2,3],43:[2,3],45:[2,3]},{13:30,15:31,20:[1,32]},{5:[2,14],12:[2,14],14:[2,14],16:[2,14],20:[2,14],24:[2,14],30:[2,14],34:[2,14],36:[2,14],38:[2,14],42:[2,14],43:[2,14],45:[2,14]},{14:[1,33],25:[1,34]},{24:[1,35]},{5:[2,2],14:[2,2]},{5:[2,20],14:[2,20],33:[2,20],44:[1,36],45:[1,37],46:[1,38],47:[1,39],48:[1,40],49:[1,41],50:[1,42]},{20:[1,45],24:[1,44],31:43,41:[1,46]},{20:[1,45],24:[1,44],31:47,41:[1,46]},{10:49,14:[2,19],16:[1,27],20:[1,23],24:[1,28],28:48,29:18,30:[1,19],34:[1,20],36:[1,21],38:[1,22],42:[1,24],43:[1,25],45:[1,26]},{20:[1,50]},{5:[2,51],14:[2,51],18:[2,51],23:[1,51],25:[2,51],32:[2,51],33:[2,51],35:[2,51],44:[2,51],45:[2,51],46:[2,51],47:[2,51],48:[2,51],49:[2,51],50:[2,51]},{5:[2,50],14:[2,50],18:[2,50],23:[1,52],25:[2,50],32:[2,50],33:[2,50],35:[2,50],44:[2,50],45:[2,50],46:[2,50],47:[2,50],48:[2,50],49:[2,50],50:[2,50]},{5:[2,49],14:[2,49],18:[2,49],23:[1,53],25:[2,49],32:[2,49],33:[2,49],35:[2,49],44:[2,49],45:[2,49],46:[2,49],47:[2,49],48:[2,49],49:[2,49],50:[2,49]},{16:[1,27],20:[1,23],24:[1,28],29:54,42:[1,24],43:[1,25],45:[1,26]},{16:[1,27],20:[1,23],24:[1,28],29:55,42:[1,24],43:[1,25],45:[1,26]},{5:[2,48],14:[2,48],18:[2,48],25:[2,48],32:[2,48],33:[2,48],35:[2,48],44:[2,48],45:[2,48],46:[2,48],47:[2,48],48:[2,48],49:[2,48],50:[2,48]},{5:[2,4],14:[2,4],16:[2,4],20:[2,4],24:[2,4],30:[2,4],34:[2,4],36:[2,4],38:[2,4],42:[2,4],43:[2,4],45:[2,4]},{14:[1,56]},{16:[1,57]},{16:[2,8]},{5:[2,15],12:[2,15],14:[2,15],16:[2,15],20:[2,15],24:[2,15],30:[2,15],34:[2,15],36:[2,15],38:[2,15],42:[2,15],43:[2,15],45:[2,15]},{20:[1,15],27:58},{14:[1,59],25:[1,60]},{16:[1,27],20:[1,23],24:[1,28],29:61,42:[1,24],43:[1,25],45:[1,26]},{16:[1,27],20:[1,23],24:[1,28],29:62,42:[1,24],43:[1,25],45:[1,26]},{16:[1,27],20:[1,23],24:[1,28],29:63,42:[1,24],43:[1,25],45:[1,26]},{16:[1,27],20:[1,23],24:[1,28],29:64,42:[1,24],43:[1,25],45:[1,26]},{16:[1,27],20:[1,23],24:[1,28],29:65,42:[1,24],43:[1,25],45:[1,26]},{5:[2,44],14:[2,44],18:[2,44],25:[2,44],32:[2,44],33:[2,44],35:[2,44],44:[2,44],45:[2,44],46:[2,44],47:[2,44],48:[2,44],49:[2,44],50:[2,44]},{5:[2,45],14:[2,45],18:[2,45],25:[2,45],32:[2,45],33:[2,45],35:[2,45],44:[2,45],45:[2,45],46:[2,45],47:[2,45],48:[2,45],49:[2,45],50:[2,45]},{32:[1,66]},{40:[1,67]},{40:[1,68]},{16:[1,27],20:[1,23],24:[1,28],29:69,42:[1,24],43:[1,25],45:[1,26]},{35:[1,70]},{14:[1,71]},{14:[2,17]},{16:[1,72]},{16:[1,27],20:[1,23],24:[1,28],29:73,42:[1,24],43:[1,25],45:[1,26]},{16:[1,27],20:[1,23],24:[1,28],29:74,42:[1,24],43:[1,25],45:[1,26]},{16:[1,27],20:[1,23],24:[1,28],29:75,42:[1,24],43:[1,25],45:[1,26]},{5:[2,46],14:[2,46],18:[2,46],25:[2,46],32:[2,46],33:[2,46],35:[2,46],44:[2,46],45:[2,46],46:[2,46],47:[2,46],48:[2,46],49:[1,41],50:[2,46]},{18:[1,76],44:[1,36],45:[1,37],46:[1,38],47:[1,39],48:[1,40],49:[1,41],50:[1,42]},{4:77,7:3,12:[2,9],14:[2,9],16:[2,9],20:[2,9],21:[1,4],24:[2,9],26:[2,9],30:[2,9],34:[2,9],36:[2,9],38:[2,9],42:[2,9],43:[2,9],45:[2,9]},{17:78,18:[2,26],19:79,20:[1,80]},{5:[2,16],12:[2,16],14:[2,16],16:[2,16],20:[2,16],24:[2,16],30:[2,16],34:[2,16],36:[2,16],38:[2,16],42:[2,16],43:[2,16],45:[2,16]},{5:[2,11],12:[2,11],14:[2,11],16:[2,11],20:[2,11],24:[2,11],26:[2,11],30:[2,11],34:[2,11],36:[2,11],38:[2,11],42:[2,11],43:[2,11],45:[2,11]},{20:[1,9],22:81},{5:[2,39],14:[2,39],18:[2,39],25:[2,39],32:[2,39],33:[2,39],35:[2,39],44:[2,39],45:[2,39],46:[1,38],47:[1,39],48:[1,40],49:[1,41],50:[1,42]},{5:[2,40],14:[2,40],18:[2,40],25:[2,40],32:[2,40],33:[2,40],35:[2,40],44:[2,40],45:[2,40],46:[1,38],47:[1,39],48:[1,40],49:[1,41],50:[1,42]},{5:[2,41],14:[2,41],18:[2,41],25:[2,41],32:[2,41],33:[2,41],35:[2,41],44:[2,41],45:[2,41],46:[2,41],47:[2,41],48:[1,40],49:[1,41],50:[1,42]},{5:[2,42],14:[2,42],18:[2,42],25:[2,42],32:[2,42],33:[2,42],35:[2,42],44:[2,42],45:[2,42],46:[2,42],47:[2,42],48:[1,40],49:[1,41],50:[1,42]},{5:[2,43],14:[2,43],18:[2,43],25:[2,43],32:[2,43],33:[2,43],35:[2,43],44:[2,43],45:[2,43],46:[2,43],47:[2,43],48:[2,43],49:[1,41],50:[1,42]},{5:[2,19],10:82,14:[2,19],16:[1,27],20:[1,23],24:[1,28],29:18,30:[1,19],33:[2,19],34:[1,20],36:[1,21],38:[1,22],42:[1,24],43:[1,25],45:[1,26]},{24:[1,83]},{20:[1,85],24:[1,84]},{32:[2,35],35:[2,35],44:[1,36],45:[1,37],46:[1,38],47:[1,39],48:[1,40],49:[1,41],50:[1,42]},{5:[2,19],10:86,14:[2,19],16:[1,27],20:[1,23],24:[1,28],29:18,30:[1,19],33:[2,19],34:[1,20],36:[1,21],38:[1,22],42:[1,24],43:[1,25],45:[1,26]},{10:88,14:[2,19],16:[1,27],20:[1,23],24:[1,28],29:18,30:[1,19],34:[1,20],36:[1,21],37:[1,87],38:[1,22],42:[1,24],43:[1,25],45:[1,26]},{16:[1,27],18:[2,29],20:[1,23],24:[1,28],29:90,39:89,42:[1,24],43:[1,25],45:[1,26]},{5:[2,36],14:[2,36],18:[2,36],25:[2,36],32:[2,36],33:[2,36],35:[2,36],44:[1,36],45:[1,37],46:[1,38],47:[1,39],48:[1,40],49:[1,41],50:[1,42]},{5:[2,37],14:[2,37],18:[2,37],25:[2,37],32:[2,37],33:[2,37],35:[2,37],44:[1,36],45:[1,37],46:[1,38],47:[1,39],48:[1,40],49:[1,41],50:[1,42]},{5:[2,38],14:[2,38],18:[2,38],25:[2,38],32:[2,38],33:[2,38],35:[2,38],44:[1,36],45:[1,37],46:[1,38],47:[1,39],48:[1,40],49:[1,41],50:[1,42]},{5:[2,47],14:[2,47],18:[2,47],25:[2,47],32:[2,47],33:[2,47],35:[2,47],44:[2,47],45:[2,47],46:[2,47],47:[2,47],48:[2,47],49:[2,47],50:[2,47]},{14:[1,91]},{18:[1,92]},{18:[2,7]},{18:[2,27],25:[1,93]},{5:[2,12],12:[2,12],14:[2,12],16:[2,12],20:[2,12],24:[2,12],26:[2,12],30:[2,12],34:[2,12],36:[2,12],38:[2,12],42:[2,12],43:[2,12],45:[2,12]},{5:[2,22],14:[2,22],33:[1,94]},{32:[2,32],35:[2,32]},{32:[2,33],35:[2,33]},{32:[2,34],35:[2,34]},{5:[2,23],14:[2,23],33:[2,23]},{5:[2,24],14:[2,24],33:[2,24]},{14:[2,18]},{18:[1,95]},{18:[2,30],25:[1,96],44:[1,36],45:[1,37],46:[1,38],47:[1,39],48:[1,40],49:[1,41],50:[1,42]},{5:[2,5],12:[2,5],14:[2,5],16:[2,5],20:[2,5],24:[2,5],30:[2,5],34:[2,5],36:[2,5],38:[2,5],42:[2,5],43:[2,5],45:[2,5]},{14:[2,6]},{18:[2,26],19:97,20:[1,80]},{5:[2,19],10:98,14:[2,19],16:[1,27],20:[1,23],24:[1,28],29:18,30:[1,19],33:[2,19],34:[1,20],36:[1,21],38:[1,22],42:[1,24],43:[1,25],45:[1,26]},{5:[2,25],14:[2,25],33:[2,25]},{16:[1,27],18:[2,29],20:[1,23],24:[1,28],29:90,39:99,42:[1,24],43:[1,25],45:[1,26]},{18:[2,28]},{5:[2,21],14:[2,21],33:[2,21]},{18:[2,31]}],
defaultActions: {10:[2,1],32:[2,8],49:[2,17],79:[2,7],88:[2,18],92:[2,6],97:[2,28],99:[2,31]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


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
  symbol_table = symbolTables[scope];

}

function findDef(id){

  var f = id;
  var s = scope;
  
  while(s >= 0){
    for (var i in symbolTables[s].vars){
      if(i == f){
         if(symbolTables[s].vars[i].type != 'proc'){
	  console.log(i.type + ' ' + i + ' ' + symbolTables[s].vars);
	  return;
	  }
	}
    }
    s--;
  }
   
  throw new Error( f + " is not defined.");

}

function findDefProc(id){

  var f = id;
  var s = scope;
  
  while(s >= 0){
    for (var i in symbolTables[s].vars){
      if(i == f){
         if(symbolTables[s].vars[i].type != 'const' && symbolTables[s].vars[i].type != 'var'){
	  return;
	  }
	}
    }
    s--;
  }
   
  throw new Error( "Procedure " + f + " is not defined.");

}

function findDefvar(id){

  var f = id;
  var s = scope;

  while(s >= 0){
    for (var i in symbolTables[s].vars){
      if(i == f){
         if(symbolTables[s].vars[i].type != 'const' && symbolTables[s].vars[i].type != 'proc'){
          return;
          }
        }
    }
    s--;
  }

  throw new Error( "Cant use constant or procedure:  " + f ");

}



function fact (n) { 
  return n==0 ? 1 : fact(n-1) * n 
}
/* generated by jison-lex 0.2.0 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            if (this.options.backtrack_lexer) {
                delete backup;
            }
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        if (this.options.backtrack_lexer) {
            delete backup;
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var reserved_words = { PI: 'PI', E : 'E', IF: 'if', THEN: 'then', ELSE: 'else', WHILE: 'while', DO: 'do', BEGIN: 'begin' , END: 'end' ,
			CALL: 'call', VAR: 'var' , ODD: 'odd', CONST: 'const', PROCEDURE: 'procedure' }

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
}


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and comments */
break;
case 1:return 24
break;
case 2:return 40
break;
case 3:return idORrw(yy_.yytext)
break;
case 4:return yy_.yytext;
break;
case 5:return 25
break;
case 6:return 5
break;
case 7:return 6
break;
case 8:return 'INVALID'
break;
}
},
rules: [/^(?:\s+|#.*)/,/^(?:\b\d+(\.\d*)?([eE][-+]?\d+)?\b)/,/^(?:[!<>=]=|[<>])/,/^(?:\b[A-Za-z_]\w*\b)/,/^(?:[-*/+^!%=();])/,/^(?:[,])/,/^(?:[.])/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = calculator;
exports.Parser = calculator.Parser;
exports.parse = function () { return calculator.parse.apply(calculator, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}