var path = require('path');

//console.log(path.basename(__filename))

//path.join(__dirname, 'una direccion) une una direccion con el archivo

var util = require('util');
//util.log("hola") //imprime hola con la fecha
//var nombre = "Jochy";
//var result = util.format("Hola %s", nombre);
//console.log(result);

var v8 = require('v8');
console.log(v8.getHeapStatistics());