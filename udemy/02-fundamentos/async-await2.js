/**
 * refork ejercicios anteriores
 */


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
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}
*/
let getEmpleado = async(id) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            throw new Error(`No existe un empleado con el ID ${id}`);
        } else {
            return empleadoDB;
        }

    }
    /*
        let getSalario = (empleado) => {
            return new Promise((resolve, reject) => {
                let salarioDB = salarios.find(salario => salario.id === empleado.id);
                if (!salarioDB) {
                    reject(`No se encontró salario para el usuario ${empleado.nombre}`);
                } else {
                    resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
                }
            });
        }
    */

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontró salario para el usuario ${empleado.nombre}`);
    } else {
        return { nombre: empleado.nombre, salario: salarioDB.salario };
    }
}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `El salario de ${resp.nombre} es de ${resp.salario}`;
}


getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));