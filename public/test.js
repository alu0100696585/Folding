var assert = chai.assert; //la variable assert contiene los asertos que se pueden realizar

suite( 'Analizador Sintacsis + Ambito', function(){  //Suite equivale al describle en RAKE
  
  test('Ambito procedure.', function(){  
    var result = calculator.parse("");
    assert.deepEqual(JSON.stringify(result,undefined,2), '[\n  {\n    "st": {\n      "type": "ID",\n      "left": {\n        "type": "-",\n        "left": {\n          "type": "-",\n          "left": 3,\n          "right": 4\n        },\n        "right": 1\n      }\n    }\n  },\n  {\n    "A": {\n      "type": "ID",\n      "left": {\n        "type": "-",\n        "left": {\n          "type": "-",\n          "left": 3,\n          "right": 4\n        },\n        "right": 1\n      }\n    }\n  }\n]'); 
  });
  
  test('Variable no definida.', function(){  
    var result = calculator.parse("var a, b; procedure jruvi(); h = a + b; b = h;.");
    assert.deepEqual(JSON.stringify(result,undefined,2), '[\n  {\n    "st": {\n      "type": "ID",\n      "left": {\n        "type": "+",\n        "left": {\n          "type": "*",\n          "left": 3,\n          "right": 4\n        },\n        "right": 2\n      }\n    }\n  },\n  {\n    "A": {\n      "type": "ID",\n      "left": {\n        "type": "+",\n        "left": {\n          "type": "*",\n          "left": 3,\n          "right": 4\n        },\n        "right": 2\n      }\n    },\n    "t": {\n      "type": "ID",\n      "left": 3\n    },\n    "j": {\n      "type": "ID",\n      "left": "b"\n    },\n    "B": {\n      "type": "ID",\n      "left": {\n        "type": "/",\n        "left": 6,\n        "right": "i"\n      }\n    }\n  }\n]');
  });
  
  test('Variable no definida.', function(){  
    var result = calculator.parse("var a, c; procedure escala(d); a = d*c; call escala(b)");
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