const fs = require('fs');
const archivo = 'file.txt';

//validar si existe un archivo

/*if(fs.existsSync(archivo)){
    console.log("El archivo existe");
}else{
    console.log("El archivo no existe");
}*/

/*fs.access(archivo, fs.constants.F_OK, (err) => {
    if(err){
        console.log("El archivo no existe");
    }else{
        console.log("El archivo existe")
    }
});*/

//escribir en un arhivo

var contenido = "Hola jochy, como te encunetras";

/*fs.writeFileSync(archivo, contenido);
console.log("se ha escrito el msj");*/

/*fs.writeFile(archivo, contenido, (err) => {
    if(err) throw("Hubo un error");

    console.log("done")
})*/


//adjuntar mas contenido en un archivo

const textoAdicional = " hoy es un gran dia";
fs.appendFile(archivo, textoAdicional, (err) => {
    if(err) throw("hubo un error");
    console.log("done");
})