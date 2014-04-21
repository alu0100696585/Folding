var assert = chai.assert; //la variable assert contiene los asertos que se pueden realizar

suite( 'Analizador sintáctico con PEGJS', function(){  //Suite equivale al describle en RAKE
  
  test('Resta asociativa a la izquierda', function(){  
    var result = calculator.parse("A = 3 - 4 - 1.");
    assert.deepEqual(JSON.stringify(result,undefined,2), '[\n  {\n    "st": {\n      "type": "ID",\n      "left": {\n        "type": "-",\n        "left": {\n          "type": "-",\n          "left": 3,\n          "right": 4\n        },\n        "right": 1\n      }\n    }\n  },\n  {\n    "A": {\n      "type": "ID",\n      "left": {\n        "type": "-",\n        "left": {\n          "type": "-",\n          "left": 3,\n          "right": 4\n        },\n        "right": 1\n      }\n    }\n  }\n]'); 
  });
  
  test('Division asociativa a la izquierda', function(){  
    var result = calculator.parse("A = 3 / 4 / 2.");
    assert.deepEqual(JSON.stringify(result,undefined,2), '[\n  {\n    "st": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": {\n          "type": "/",\n          "left": 3,\n          "right": 4\n        },\n        "right": 2\n      }\n    }\n  },\n  {\n    "A": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": {\n          "type": "/",\n          "left": 3,\n          "right": 4\n        },\n        "right": 2\n      }\n    }\n  }\n]' );
  });
  
  test('Constructor program', function(){  
    var result = calculator.parse("const A = 5; var A, b; t = 3.");
    assert.deepEqual(JSON.stringify(result,undefined,2), '[\n  {\n    "cnst": {\n      "type": "CONST",\n      "constantes": {\n        "type": "=",\n        "left": "A",\n        "right": "5"\n      }\n    },\n    "V": {\n      "type": "VAR",\n      "variables": [\n        {\n          "type": "VAR",\n          "id": "A"\n        },\n        "b"\n      ]\n    },\n    "st": {\n      "type": "ID",\n      "left": 3\n    }\n  },\n  {\n    "A": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": {\n          "type": "/",\n          "left": 3,\n          "right": 4\n        },\n        "right": 2\n      }\n    },\n    "t": {\n      "type": "ID",\n      "left": 3\n    }\n  }\n]');
  });
  
  test('Constructor de bloque', function(){  
    var result = calculator.parse("procedure sum ( u ); j = u + 8; call sum (u).");
    assert.deepEqual(JSON.stringify(result,undefined,2), '[\n  {\n    "proc": {\n      "type": "procedure",\n      "left": "sum",\n      "argumentos": [\n        "u"\n      ],\n      "right": {\n        "st": {\n          "type": "ID",\n          "left": {\n            "type": "+",\n            "left": "u",\n            "right": 8\n          }\n        }\n      }\n    },\n    "st": {\n      "type": "call",\n      "llamada": "sum"\n    }\n  },\n  {\n    "A": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": {\n          "type": "/",\n          "left": 3,\n          "right": 4\n        },\n        "right": 2\n      }\n    },\n    "t": {\n      "type": "ID",\n      "left": 3\n    },\n    "j": {\n      "type": "ID",\n      "left": {\n        "type": "+",\n        "left": "u",\n        "right": 8\n      }\n    }\n  }\n]');
  });
  
  test('Constructor de statement', function(){  
    var result = calculator.parse("B = 6 / i.");
    assert.deepEqual(JSON.stringify(result,undefined,2), '[\n  {\n    "st": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": 6,\n        "right": "i"\n      }\n    }\n  },\n  {\n    "A": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": {\n          "type": "/",\n          "left": 3,\n          "right": 4\n        },\n        "right": 2\n      }\n    },\n    "t": {\n      "type": "ID",\n      "left": 3\n    },\n    "j": {\n      "type": "ID",\n      "left": {\n        "type": "+",\n        "left": "u",\n        "right": 8\n      }\n    },\n    "B": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": 6,\n        "right": "i"\n      }\n    }\n  }\n]');  
  });
  
  test('Constructor de condicion', function(){  
    var result = calculator.parse("if a == b then j = a else j = b.");
    assert.deepEqual(JSON.stringify(result,undefined,2), '[\n  {\n    "st": {\n      "type": "ifelse",\n      "condicion": {\n        "type": "==",\n        "left": "a",\n        "right": "b"\n      },\n      "if": {\n        "type": "ID",\n        "left": "a"\n      },\n      "else": {\n        "type": "ID",\n        "left": "b"\n      }\n    }\n  },\n  {\n    "A": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": {\n          "type": "/",\n          "left": 3,\n          "right": 4\n        },\n        "right": 2\n      }\n    },\n    "t": {\n      "type": "ID",\n      "left": 3\n    },\n    "j": {\n      "type": "ID",\n      "left": "b"\n    },\n    "B": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": 6,\n        "right": "i"\n      }\n    }\n  }\n]');
  });
  
  test('Constructores de termino y factor', function(){  
    var result = calculator.parse("A = 3 * 4 + 2.");
    assert.deepEqual(JSON.stringify(result,undefined,2), '[\n  {\n    "st": {\n      "type": "ID",\n      "left": {\n        "type": "+",\n        "left": {\n          "type": "*",\n          "left": 3,\n          "right": 4\n        },\n        "right": 2\n      }\n    }\n  },\n  {\n    "A": {\n      "type": "ID",\n      "left": {\n        "type": "+",\n        "left": {\n          "type": "*",\n          "left": 3,\n          "right": 4\n        },\n        "right": 2\n      }\n    },\n    "t": {\n      "type": "ID",\n      "left": 3\n    },\n    "j": {\n      "type": "ID",\n      "left": "b"\n    },\n    "B": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": 6,\n        "right": "i"\n      }\n    }\n  }\n]');
  });
  
  test('Error gramatico', function(){  
    try {
      var result = calculator.parse("var i = 0, u = 9.");
      result = (JSON.stringify(result,undefined,2));
    } catch (e) {
      result = (String(e));
    }
    assert.deepEqual(result, 'Error: Parse error on line 1:\nvar i = 0, u = 9.\n------^\nExpecting \';\', \'COMMA\', got \'=\'');
  });
  
});