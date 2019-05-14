/**
 *  Async Await
 */

/*
let getNombre = () => {
    return new Promise((resolve, reject) => {
        //reject(`No existe un empleado con el ID ${id}`);
        resolve('Fernando');
    });
}
*/
/*
let getNombre = async() => {

    throw new Error('Ńoexiste un nombre para ese usuario');
*/
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando');
        }, 3000);
    });
}
let saludo = async() => {

    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log('Error de Async', e);
    })