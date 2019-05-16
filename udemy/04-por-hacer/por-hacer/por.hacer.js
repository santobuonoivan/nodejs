const fs = require('fs');

let listadoPorHacer = [];

const  guardarDB = () => {


    let data = JSON.stringify( listadoPorHacer );

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('no se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    }catch (e) {
        listadoPorHacer = [];
    }
}
const  crear = ( description) => {

    cargarDB();

    let porHacer = {
        description,
        completado: false
    };

    listadoPorHacer.push( porHacer);
    guardarDB();

    return porHacer;
}











module.exports = {
    crear
}