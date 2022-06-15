const fs = require('fs');

//mkdir
//fs.mkdirSync('img');

/*fs.mkdir('css', (err) => {
    if(err) {
        throw('Error: ' + err);
    }
    console.log("Carpeta creada...");
})*/

//validar si existe una carpeta


if(fs.existsSync('css')){
    console.log("La carpeta ya existe");
}else{
    fs.mkdir('css', (err) => {
        if(err){
            throw("Error: " + err);
        }
        console.log("Carpeta creada");
    });
};