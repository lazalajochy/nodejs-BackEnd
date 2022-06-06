var a = 25, b = 20;
var path = require("path")
console.log(`EL resultado de la suma es ${a+b}`)
console.log(__dirname); //dirname muestra la direccion donde el archivo se esta ejecutando
console.log(__filename); //muestra el nombre del archivo que se esta ejecutando incluyendo la direccion
console.log(path.basename(__filename)); //muestra solo el nombre del archivo