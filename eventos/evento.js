//const events = require('events');
//const emitter = new events.EventEmitter();
const eventEmitter = require('events').EventEmitter;
const util = require('util');


var Persona = function(nombre){
    this.nombre = nombre;
};

util.inherits(Persona, eventEmitter)

let persona = new Persona("jochy");

//console.log(`Me llamo ${persona.nombre}`);
persona.on('hablar', (mensaje) => {
    console.log(`${persona.nombre}: ${mensaje}`)
});

persona.emit('hablar', 'hoy es un gran dia');
/*emitter.on('eventCustom', (mensaje, estatus) => {
    console.log(`${estatus}: ${mensaje}`);
});

emitter.emit('eventCustom', 'Mensaje cargado con exito', 200);*/