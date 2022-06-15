const fs = require('fs');

//renombrar sincrono
//fs.renameSync('./file.txt', './config.txt');


//renombrar asincrono
/*fs.rename('./config.txt', './file.txt', (err) => {
    if(err){
        throw(err);
    }
    console.log("Archivo renombrado");
})*/


//mover archivo
/*fs.rename('./file.txt', './src/file.txt', (err) => {
    if(err){
        throw(err);
    }
    console.log("Archivo removido");
})*/


//eleminar archivo

fs.unlinkSync('./src/file.txt');
console.log("Archivo elimando!");

