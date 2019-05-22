
const { argv } = require( './config/yargs');
const lugar  = require('./lugar/lugar');
const clima = require('./clima/clima');


/*
lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
*/
/*
clima.getClima(40.750000,-74.000000)
    .then( console.log )

    .catch(console.log);
*/


const getInfo = async ( dir ) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(dir);
        console.log(coordenadas);
        const temperatura = await clima.getClima(coordenadas.lat,coordenadas.lng );
        return `El clima de ${coordenadas.direccion} es de ${temperatura}`;
    }catch (e) {
        return `No se pudo determinar el clima de ${dir}`;
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);