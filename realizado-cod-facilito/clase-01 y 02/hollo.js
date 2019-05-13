var http = require("http");// trae modulo http

var manejador = function ( solicitud, respuesta) {
    console.log("recibido");// manda a consola
    respuesta.end("hola mundo");// corta coneccion y manda al browser
};

var servidor = http.createServer( manejador ).listen(8080);