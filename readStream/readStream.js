const fs = require('fs');

/*let log = fs.readFileSync('./logs.log');
console.log(`longitud: ${log.length}`);*/

let stream = fs.createReadStream('./logs.log', 'utf-8');

let data = '';

stream.once('data', () =>{
    console.log("Iniciando el stream..");
});

stream.on('data', (chunk) =>{
    console.log(`${chunk.length} |`);
    data += chunk;



});

stream.on('end', () => {
    console.log("Fin del stream...\n");
    console.log(data.length);
})