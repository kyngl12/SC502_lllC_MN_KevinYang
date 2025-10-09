saludo = 'hola';
var mombre = 'Kevin Yang';
let provincia = 'Cartago';
const pais = 'Costa Rica';

//USAREMOS LET Y CONST

provincia = [];
provincia = 700;

console.log('Saludo: ', saludo);
console.log('Nombre: ', nombre);
console.log('Provincia: ', provincia);
console.log('País: ', pais);

function sumar() {
    console.log('Funcion sumar')
}

const suma = () =>  {
    console.log('Funcion suma')
    
}

sumar();
suma();

document.addEventListener("DOMContentLoaded", function() {

    const nombre = 'Kevin Yang';
    const provincia = 'Cartago';

    console.log('La pagina termino de cargar');
    console.log(`La pagina termino de cargar, hola ${nombre} su provincia es ${provincia}`); //Mad facil y ordenada
    
});