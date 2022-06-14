const persona = require('./persona');

var jochy = new persona("juana");

jochy.on('habla', (mensaje) => {
    console.log(`${jochy.nombre}: ${mensaje}`);
});

jochy.emit('habla','Hoy sera un dia genial!!');