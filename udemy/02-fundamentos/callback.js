
/*
setTimeout( () => {
    console.log('Hola Mundo');
}, 3000);

 */

let getUsuarioById = (id, callback ) => {
    let usuario = {
        nombre: 'Ivan',
        id: id
    };

    if ( id === 20 ){
        callback(`El usuario con id ${id}, no existe en la DB`);
    }else{
        callback(null,usuario);
    }

}


getUsuarioById(2,(err,usuario) => {
    if (err){
        return console.log(err);
    }
    console.log('Usuario de datos ', usuario);
});