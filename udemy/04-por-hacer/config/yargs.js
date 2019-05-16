
const argv = require('yargs')

    .command('crear', 'Crea tarea', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer',
        }
    })
    .command('listar', 'Lista tareas', {
        description: {
            alias: 'l',
            default: '',
        }
    })
    .command('actualizar', 'Actualiza una tarea', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer',
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marco como completado o pendiente la tarea',

        },
        help: {
            alias: 'h',
        }
    })

    .help()
    .argv;

module.exports = {
    argv
}