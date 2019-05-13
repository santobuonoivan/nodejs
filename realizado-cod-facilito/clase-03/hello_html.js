var http = require('http'),
    fs = require('fs');

//var html = fs.readFileSync('./index.html');

// hay que reiniciar servidor por terminal cada vez que reinicie el html
/*
fs.readFile('./index.html',function (err,html) {//lectura sin detener el servidor
    http.createServer(function(req, res) {
        res.write( html );
        res.end();
    }).listen(8080);    
});
*/
//en cada peticion actualiza el html y no necesita reiniciar servidor
http.createServer(function(req, res) {
    fs.readFile('./index.html',function (err,html) {//lectura sin detener el servidor
        res.write( html );
        res.end();
    });
}).listen(8080);    
