
/*
    VIEJO

    function sumar(a,b) {
        return a+b;
    }
*/


let sumar = (a,b) => a+b;

/*
    function  saludar() {
        return 'Hola Mundo';
    }
*/

let saludar = () => 'Hola Mundo';


//console.log( sumar(2,6));

//console.log( saludar());

/*
    let deadpool = {
        nombre : 'Wade',
        apellido : 'Winston',
        poder : "Regeneration",
        getNombre : function() {
            return `${this.nombre} ${this.apellido} -poder: ${this.poder}`;
        },
    };

 */


let deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : "Regeneration",
    getNombre() {
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`;
    },
};

console.log( deadpool.getNombre());

