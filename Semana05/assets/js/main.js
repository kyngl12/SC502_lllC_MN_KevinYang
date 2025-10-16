saludo = "hola";
var nombre = "Kevin Yang";
let provincia = "Cartago";
const pais = "Costa Rica";

//USAREMOS LET Y CONST

provincia = [];
provincia = 700;

console.log("Saludo: ", saludo);
console.log("Nombre: ", nombre);
console.log("Provincia: ", provincia);
console.log("País: ", pais);

function sumar() {
  console.log("Funcion sumar");
}

const suma = () => {
  console.log("Funcion suma");
};

sumar();
suma();

document.addEventListener("DOMContentLoaded", function () {
  const nombre = "Kevin Yang";
  const provincia = "Cartago";

  console.log("La pagina termino de cargar");
  console.log(
    `La pagina termino de cargar, hola ${nombre} su provincia es ${provincia}`
  ); //Mad facil y ordenada

  //btnCargar
  const button = document.querySelector("#btnCargar"); //Pasamos selector CSS

  console.log("Button: ", button);

  //button.addEventListener('click', sumar);
  //button.addEventListener('click', saludar);

  //button.addEventListener("click", cargarClientes);

  button.addEventListener("click", cargarClientesHtml);

  const input= document.querySelector('#input-nombre');
  input.addEventListener('fullscreenchange', mostrarNombre);

});

const mostrarNombre = (event) => { //REVISAR, NO SE MUESTRA

    console.log({event});
    
    console.log('llamando a mostrar nombre');

    //const input = document.querySelector('#input-nombre');
    const texto = document.querySelector('#texto-nombre'); //span

    texto.textContent = event.target.value; //Acceder a valor del input
}


//crear objeto literal (n cant elementos)
const persona = {
  nombre: "Kevin",
  apellido1: "Yang",
  apellido2: "Li",
  edad: 19,
  direccion: "San Pedro, CR",
  ubicacion: {
    //Obj dentro de persona
    provincia: "Cartago",
    canton: "Tres Rios",
  },
  pasatiempos: ["Correr", "Leer", "Programar"],
};

//Declaracion arreglo
const arreglo = ["hola", 123, ["", true]];

const clientes = [
  {
    codigo: 1,
    nombre: "Cliente 1",
    correo: "cliente1@gmail.com",
    telefono: "5555-5556",
  },
  {
    codigo: 2,
    nombre: "Cliente 2",
    correo: "cliente2@gmail.com",
    telefono: "5555-5557",
  },
  {
    codigo: 3,
    nombre: "Cliente 3",
    correo: "cliente3@gmail.com",
    telefono: "5555-5558",
  },
  {
    codigo: 4,
    nombre: "Cliente 4",
    correo: "cliente4@gmail.com",
    telefono: "5555-5559",
  },
];

const tbody = document.querySelector('#tbody-section'); //Aca necesito crear las tablas, le doy un id

tbody.innerHTML = ''; //Limpiar el tbody al cargar pagina

const cargarClientes = () => {
  console.log("Llamando funcion cargarClientes");

  //console.log(clientes);

  clientes.forEach(cliente => {  //Recorrer cada elemento 
    const fila = document.createElement('tr'); //Crear fila

    const celdaCodigo = document.createElement('td');
    celdaCodigo.textContent = cliente.codigo; //Asignar valor

    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = cliente.nombre;

    const celdaCorreo = document.createElement('td');
    celdaCorreo.textContent = cliente.correo;

    const celdaTelefono = document.createElement('td');
    celdaTelefono.textContent = cliente.telefono;

    fila.appendChild(celdaCodigo); //Agregar celda a la fila
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaCorreo);
    fila.appendChild(celdaTelefono);

    tbody.appendChild(fila); //Agregar fila al tbody
  });
};

const cargarClientesHtml = () => {

    let fila = '';
    
    clientes.forEach(cliente => {
    
         fila += `<tr>   
                <td>${cliente.codigo}</td>    
                <td>${cliente.nombre}</td>
                <td>${cliente.correo}</td>
                <td>${cliente.telefono}</td>               
              </tr> `;
})
    tbody.innerHTML = fila; //Agregar todas las filas de una vez al contenido HTML
}; 


const saludar = () => {
  console.log("Hola desde saludar");
};
