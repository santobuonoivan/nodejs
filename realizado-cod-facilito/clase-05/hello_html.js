var http = require('http'),
    fs = require('fs');

//en cada peticion actualiza el html y no necesita reiniciar servidor
http.createServer(function(req, res) {
    fs.readFile('./index.html',function (err,html) {//lectura sin detener el servidor
        
       
        res.writeHead(200, {"Content-Type":"application/json"} ); // config encabezados
        res.write(JSON.stringify({nombre: "Uriel", username:"Uriel"})); // imprimo JSON en browser
        res.end(); // termino coneccion
    });
}).listen(1234);    
