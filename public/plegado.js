var scopes = [];


function findConst (n_simbol, ambito) {


  for (i = (scopes.length - 1); i >= 0; i--) {


    if (scopes[i].name == ambito && scopes[i].symbolTables[numsym] != undefined) {

      if(scopes[i].symbolTables[numsym].type == "const")

        return [true, scopes[i].symbolTables[numsym].valor];

      break;
    }

  }


	return [false];

};

function recorrido (tree) {


	if (typeof tree == "object") {


		if (tree.type == "program")

			ambitos.push( { name: "global", symbol_table: arbol.symboltable } );

		if (tree.type == "prodecure")

                         ambitos.push( { name: arbol.id, symbol_table: arbol.symboltable } );

    
    if (tree.type == "ID") {

	console.log("hasta buscar constante");      
      var res = findConst(arbol.valor, arbol.declared_in);

      
      if (res[0]) {

        tree["type"] = "NUM";

        tree["valor"] = res[1];
        if(tree["declared_in"])
           tree["declared_in"] = undefined;

      }
    }

    
		$.each(arbol, function(k,v) {

			//console.log(k + ": " + v);

			recorrido(v);
		})


		if (tree.type == "program" || tree.type == "procedure")

		  scopes.pop();

      
		if (tree.type == "+" || tree.type == "-" || tree.type == "*" || tree.type == "/") {


      var result;

      if (typeof tree.left == "object" && tree.left.type == "NUM"

       && typeof tree.right == "object" && tree.right.type == "NUM") {

        switch (tree.type) {

      
          case "+":

            result = parseFloat(tree.left.valor) + parseFloat(tree.right.valor);

          break;
      

          case "-":

            result = parseFloat(tree.left.valor) - parseFloat(tree.right.valor);

          break;
      

          case "*":

            result = parseFloat(tree.left.valor) * parseFloat(tree.right.valor);

          break;
          

          case "/":

            result = parseFloat(tree.left.valor) / parseFloat(tree.right.valor);

          break;
        }

      
        tree.left = undefined;

        tree.right = undefined;

        tree.type = "NUM";

        tree.valor = result.toString();

      }
    }

	}
};

