//const  { argv } = require('yargs');

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por.hacer');

let comando = argv._[0];

switch ( comando ) {
    case 'crear':
        let tarea = porHacer.crear( argv.description );
        console.log( tarea );
        break;
    case 'listar':
        console.log('Listar cosas por hacer');
        break;
    case 'actualizar':
        console.log('Actualizar cosas por hacer');
        break;

    default:
        console.log('Comando no es reconocido');
}