// FileSystem para poder grabar en archivos y manejo de archivos
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    let respuesta = '';
    for (let i=1;i<=limite;i++){
        respuesta += `${base} * ${i} = ${base} * ${i} \n`;
    }
    console.log( respuesta.green);
}
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: "${ base }" no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}