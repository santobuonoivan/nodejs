
const appClima = require('../05-clima-mundo/app');
const express = require('express');

const app = express();
let usuarios = [
    {
        id: 1,
        nombre: 'ívan',
        edad: 27,
    },
    {
        id: 2,
        nombre: 'lucas',
        edad: 19,
    },
    {
        id: 3,
        nombre: 'Miguel',
        edad: 25,
    },
    {
        id: 4,
        nombre: 'Pablo',
        edad: 47,
    },
    {
        id: 5,
        nombre: 'Fernando',
        edad: 20,
    }];

app.use( express.static(__dirname + '/public'));






app.get('/usuario/:id', (req, res) => {

    let id = req.params['id'];
    let respuesta = {
        respuesta: `no se encontró usuario con el id ${id}`,
    };
    for (let i=0; i < usuarios.length; i++){
        if ( usuarios[i].id == id ){
            respuesta = usuarios[i];
        }
    }
    res.send(  respuesta );
});


 app.get('/clima/:city', async (req, res) => {
    let city = req.params['city'];
    res.send( await appClima.getInfo(city));
 });


 app.listen(8080);


