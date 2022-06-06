//var nombre;
var preguntas = ["cual es tu nombre? ", "cual es tu edad? ", "lenguaje de programacion favorito? "];
var respuestas = [];


function pregunta(i){
    process.stdout.write(preguntas[i]);
};

//process.stdout.write("dime tu nombre: "); // permite imprimir un mensaje
process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim());
    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    }else{
        console.log(respuestas)
        process.exit();
    }
  /* nombre = data.toString();
   process.stdout.write(`hola ${nombre}`)
   process.exit();*/
    
});

pregunta(0);

