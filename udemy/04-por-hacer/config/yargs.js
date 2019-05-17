const description = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer',
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marco como completado o pendiente la tarea',
}




const argv = require('yargs')
    .command('crear', 'Crea tarea', { description, })
    .command('actualizar', 'Actualiza una tarea', { description, completado })
    .command('borrar', 'Borrar tarea', { description })
    .command('listar', 'Lista tareas', {
        completadol: {
            alias: 'c',
            default: null,
            desc: 'Marco como completado o pendiente la tarea',
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}