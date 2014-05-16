var ambitos = [];


function buscarConstante (n_simbol, ambito) {


  for (i = (ambitos.length - 1); i >= 0; i--) {


    if (ambitos[i].name == ambito && ambitos[i].symbolTables[n_simbol] != undefined) {

      if (ambitos[i].symbolTables[n_simbol].type == "const")

        return [true, ambitos[i].symbolTables[n_simbol].valor];

      break;
    }

  }


	return [false];

};

function recorrido (arbol) {


	if (typeof arbol == "object") {


		if (arbol.type == "program")

			ambitos.push( { name: "global", symbol_table: arbol.symboltable } );

		if (arbol.type == "prodecure")

                         ambitos.push( { name: arbol.id, symbol_table: arbol.symboltable } );

    
    if (arbol.type == "ID") {

	console.log("hasta buscar constante");      
      var res = buscarConstante(arbol.valor, arbol.declared_in);

      
      if (res[0]) {

        arbol["type"] = "NUM";

        arbol["valor"] = res[1];
        if(arbol["declared_in"])
           arbol["declared_in"] = undefined;

      }
    }

    
		$.each(arbol, function(k,v) {

			//console.log(k + ": " + v);

			recorrido(v);
		})


		if (arbol.type == "program" || arbol.type == "procedure")

		  ambitos.pop();

      
		if (arbol.type == "+" || arbol.type == "-" || arbol.type == "*" || arbol.type == "/") {


      var result;

      if (typeof arbol.left == "object" && arbol.left.type == "NUM"

       && typeof arbol.right == "object" && arbol.right.type == "NUM") {

        switch (arbol.type) {

      
          case "+":

            result = parseFloat(arbol.left.valor) + parseFloat(arbol.right.valor);

          break;
      

          case "-":

            result = parseFloat(arbol.left.valor) - parseFloat(arbol.right.valor);

          break;
      

          case "*":

            result = parseFloat(arbol.left.valor) * parseFloat(arbol.right.valor);

          break;
          

          case "/":

            result = parseFloat(arbol.left.valor) / parseFloat(arbol.right.valor);

          break;
        }

      
        arbol.left = undefined;

        arbol.right = undefined;

        arbol.type = "NUM";

        arbol.valor = result.toString();

      }
    }

	}
};

