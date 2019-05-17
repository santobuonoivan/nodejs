
const { argv } = require( './config/yargs');
const lugar  = require('./lugar/lugar');



lugar.getLugarLatLng(argv.direccion)
    .then(console.log)


