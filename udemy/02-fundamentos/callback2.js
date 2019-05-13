let empleados = [{
    id: 1,
    nombre: 'Ivan',
}, {
    id: 2,
    nombre: 'Pablo',
}, {
    id: 3,
    nombre: 'Damian',
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

/*
 *
 *  empleado => {
        return empleado.id === id;
    }@param id
 */

/*
async function getEmpleado0(id,null){
    let empleadoDB = await empleados.find(sdas).catch(ERROR => {});
        .then(empleado => {

            //dasdasd
        }).catch(error => {
            //dfsdfsf
        });
    console.log(empleadoDB);
}
*/

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

/*
{
    nombre: 'ivan',
    salario: 1000
};
*/
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontró salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario });
    }
}




getEmpleado(3, (err, empleado) => {

    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
    });
});