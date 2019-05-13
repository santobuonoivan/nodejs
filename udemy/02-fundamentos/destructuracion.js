let deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : "Regeneration",
    getNombre : function() {
        return `${this.nombre} ${this.nombre} -poder: ${this.poder}`;
    },
};

console.log( deadpool.getNombre());

// destructuracion simple
//let { nombre,apellido,poder } = deadpool;
//console.log( nombre,apellido,poder );
// destructuracion con alias
let { nombre: primerNombre,apellido ,poder  } = deadpool;


console.log( primerNombre,apellido,poder );