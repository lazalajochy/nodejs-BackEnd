var fs = require('fs');


//var files = fs.readdirSync('./');

fs.readdir('./', (err, files) => {
    if(err){
        throw err;
    }
    console.log(files);

    fs.readFile('./file.txt', 'utf-8', (err, archivo) =>{
        if(err){
            throw err;
        }
        console.log(archivo)
    });

//    var archivo = fs.readFileSync('./file.txt', 'UTF-8');

   //console.log(archivo);
    /*for(var i = 0; i <= archivo.length -1; i++){
        console.log(archivo[i])
    }*/
});
