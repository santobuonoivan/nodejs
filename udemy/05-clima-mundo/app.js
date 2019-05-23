
//const { argv } = require( './config/yargs');
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
        //console.log(coordenadas);
        const temperatura = await clima.getClima(coordenadas.lat,coordenadas.lng );
        return {
            lugar: coordenadas.direccion,
            lat: coordenadas.lat,
            lng: coordenadas.lng,
            temp: temperatura};
    }catch (e) {
        return {
            lugar: dir,
            lat: null,
            lng: null,
            temp: null};
    }



}
/*
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
*/
module.exports = {
    getInfo
}