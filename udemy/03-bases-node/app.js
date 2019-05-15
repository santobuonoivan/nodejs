const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true, //obligatorio
            alias: 'b',
        },
        limite: {
            alias: 'l',
            default: 10,
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];



let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));