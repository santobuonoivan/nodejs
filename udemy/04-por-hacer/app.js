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
        let listado = porHacer.getListado();

         console.log('====== Por Hacer: =======');
        for (let tarea of listado){
            if (argv.completado === "todo"){
                console.log('tarea: ', tarea.description);
                console.log('Estado: ', tarea.completado);
            } else if(tarea.completado == argv.completado){
                console.log('tarea: ', tarea.description);
                console.log('Estado: ', tarea.completado);
            }
        }
         console.log('=========================');
        //console.log(listado);
        break;
    case 'actualizar':
        let resp = porHacer.actualizar(argv.description,argv.completado);
        console.log( 'respuesta',resp);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.description);
        console.log( 'respuesta',borrado);
        break;
    default:
        console.log('Comando no es reconocido');
}