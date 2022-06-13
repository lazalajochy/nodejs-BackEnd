var util = require('util');
var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);

var persona = {
    nombre: '',
    comentarios: []
};

rl.question('cual es tu nombre? ', (respuesta) => {
    persona.nombre = respuesta;

    rl.setPrompt('dime un comentario: ')
    rl.prompt();
})

rl.on('line', (input) => {
    if(input.trim() === "salir"){
        var mensaje = util.format("Tu nombre es %s y me dijiste: %j", persona.nombre, persona.comentarios);
        console.log(mensaje);
        process.exit();
    }
    persona.comentarios.push(input.trim());
   // console.log(persona.comentarios)

    rl.setPrompt('dime un comentario: ')
    rl.prompt();
    
    //console.log("Escribiste un comentario")
});

/*rl.question("Cual es tu nombre? ", (respuesta) => {
    console.log(`Hello , ${respuesta}`);
    process.exit();
});*/