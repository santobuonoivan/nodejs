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

getEmpleado(2).then((empleado) => {
    getSalario(empleado).then((empleado) => {
        console.log(`Empleado de DB`, empleado);
    }).catch((err) => {
        console.log(err);
    });
    //console.log(`Empleado de DB`, empleado);
}).catch((err) => {
    console.log(err);
});