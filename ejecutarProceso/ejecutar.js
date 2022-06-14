const exec = require('child_process').exec;

const x = 10, y = 15;

exec('./script.sh ' + x + ' ' + y, (err, stdout) => {
    if(err){
        throw err;
    }
    console.log(stdout);

});


/*
exec('ls', (err, stdout) => {
    if(err){
        throw err;
    }
    console.log(stdout);
});*/

//este ejemplo no funciona bien, hay que tomar otras fuentes
