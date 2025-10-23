// console.log('saludo:', saludo);
// console.log('nombre:', nombre);
// console.log('provincia:', provincia);
// console.log('pais:', pais);

// ============================
// VARIABLES Y TIPOS DE DATOS
// ============================

// USAREMOS LET Y CONST EN CURSO
saludo = 'hola';
var nombre = 'Bryan Cerdas';
let provincia = 'Cartago';
const pais = 'CR';

provincia = [];
provincia = 700;

console.log('saludo:', saludo);
console.log('nombre:', nombre);
console.log('provincia:', provincia);
console.log('pais:', pais);

// ============================
// FUNCIONES
// ============================

function sumar() { 
    console.log('funcion sumar');
}

const suma = () => {
    console.log('funcion suma');
}

sumar();
suma();


// ============================
// EVENTO CUANDO LA PÁGINA CARGA
// ============================

document.addEventListener("DOMContentLoaded", function () {

    const nombre = 'Bryan Cerdas';
    const edad = 15;

    console.log('mi pagina termino de cargar');
    console.log("mi pagina termino de cargar " + nombre);
    console.log(`mi pagina termino de cargar, hola ${nombre} su edad es ${edad}`);

    const button  = document.querySelector('#btnCargar'); //Pasar selector CSS
    // const button2  = document.getElementById('btnCargar');

    console.log('button:', button);
    // console.log('button2:', button2);

    // button.addEventListener('click', sumar);
    // button.addEventListener('click', saludar);

    // button.addEventListener('click', cargarClientes);
    button.addEventListener('click', cargarClientesHtml);

    const input = document.querySelector('#input-nombre');
    input.addEventListener('change', mostrarNombre);

    const form = document.querySelector('#formulario');
    formulario.addEventListener('submit', submitFormulario);

    cargarUsuarios(); // Llamar a la función para cargar usuarios desde API

    const btnAgregar = document.querySelector('#btnAgregar');
    btnAgregar.addEventListener('click', agregarCliente);

    cargarClientesHtml(); // Cargar clientes al iniciar la página (sin presionar boton)

    
});

// ============================
// FUNCIÓN PARA API
// ============================

const cargarUsuarios = async () => { //Asincrono: Ejecuta algo y espera resolucion para continuar (lazy and await)

    //fetch('https://jsonplaceholder.typicode.com/users')
      //.then(response => response.json())
      //.then(json => console.log(json));

      const response = await fetch('https://jsonplaceholder.typicode.com/users') //Decirle que espere, fetch se resuelva y variable tenga datos
      //console.log({response});

      const data = await response.json(); //Esperar a que se convierta a json
      //console.log({data}); 

      data.forEach(user => {
        console.log('name: ' + user.name);
        console.log('username: ' + user.username);
      });
}


// ============================
// FUNCIÓN PARA FORMULARIO
// ============================

const submitFormulario = () => {
    event.preventDefault(); // Evitar comportamiento por defecto del formulario
    console.log('submit del formulario');

    const form = document.querySelector('#formulario');
    const formData = new FormData(form); // Obtener datos del formulario
    const data = Object.fromEntries(formData.entries()); // Convertir a objeto literal

    console.log(data);

    console.log(`El nombre es: ${data.nombre}`);
    console.log(`Los apellidos son: ${data.apellidos}`);
    console.log(`El correo es: ${data.correo}`);

    const dataJason = JSON.stringify(data); // Convertir a JSON para enviar a api
    console.log(dataJason);


}

// ============================
// FUNCIÓN PARA MOSTRAR NOMBRE
// ============================
// Se ejecuta cada vez que cambia el valor del input

const mostrarNombre = (event) => {

    console.log({event});
    console.log('llamando a mostrar nombre');

    // const input = document.querySelector('#input-nombre');
    const texto = document.querySelector('#texto-nombre'); // span
    texto.textContent = event.target.value; // Acceder a valor del input
}


// ============================
// OBJETO LITERAL (N CANT ELEMENTOS)
// ============================

const persona = {
    nombre : 'Bryan',
    apellido1 : 'Cerdas',
    apellido2 : 'Salas',
    edad: 15,
    direccion: 'San Pedro, CR',
    ubicacion : { //Objeto dentro de persona
        provincia : 'San Jose',
        canton: 'Montes de Oca'
    },
    pasatiempos: ['Jugar Fut', 'Programar']
}


// ============================
// ARREGLOS
// ============================

const arreglo = ['Hola', 25, ['', true]];


// ============================
// ARREGLO DE CLIENTES (OBJETOS)
// ============================

const clientes = [
    { 
        codigo: 1, 
        nombre: 'Cliente uno', 
        correo: 'cliente@correo.com', 
        telefono: '2222-4488' 
    },
    { codigo: 2, nombre: 'Cliente dos', correo: 'cliente@correo.com', telefono: '2222-4488' },
    { codigo: 3, nombre: 'Cliente tres', correo: 'cliente@correo.com', telefono: '2222-4488' },
    { codigo: 4, nombre: 'Cliente cuatro', correo: 'cliente@correo.com', telefono: '2222-4488' },
    { codigo: 5, nombre: 'Cliente cinco', correo: 'cliente@correo.com', telefono: '2222-4488' },
]

// ============================
// SELECCIÓN Y LIMPIEZA DEL TBODY
// ============================

const tbody = document.querySelector('#tbody-section');
tbody.innerHTML = ''; // Limpiar tabla antes de cargar datos


// ============================
// FUNCIÓN PARA CARGAR CLIENTES (CREANDO ELEMENTOS)
// ============================

const cargarClientes = () => {
    console.log('llamando a mi funcion cargar clientes');

    // console.log(clientes);

    clientes.forEach(cliente => {

        const fila  = document.createElement('tr'); // Crear fila

        const celdaCodigo = document.createElement('td');
        celdaCodigo.textContent = cliente.codigo; // Asignar valor

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = cliente.nombre;

        const celdaCorreo = document.createElement('td');
        celdaCorreo.textContent = cliente.correo;

        const celdaTelefono = document.createElement('td');
        celdaTelefono.textContent = cliente.telefono;

        fila.appendChild(celdaCodigo); // Agregar celda a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCorreo);
        fila.appendChild(celdaTelefono);

        tbody.appendChild(fila); // Agregar fila al tbody
    });

}


// ============================
// FUNCIÓN PARA CARGAR CLIENTES CON HTML DIRECTO
// ============================

const cargarClientesHtml = () => {

    const clientesJson = localStorage.getItem('clientes'); // Obtener datos de localStorage
    const clientesArray = JSON.parse(clientesJson); // Convertir de JSON a arreglo

    tbody.innerHTML = ''; // Limpiar tabla antes de cargar datos

    let filas = ''; // Variable para almacenar filas en formato HTML

    clientesArray.forEach(cliente => {

        filas += `<tr>
                      <td> <input type="checkbox" class="chkCliente" data-id="${cliente.codigo}"></td>
                      <td>${cliente.codigo}</td>
                      <td>${cliente.nombre}</td>
                      <td>${cliente.correo}</td>
                      <td>${cliente.telefono}</td>
                  </tr>`;

    });

    tbody.innerHTML = filas; // Insertar las filas generadas en el tbody > Aqui existen elementos, los creo

    document.querySelectorAll('.chkCliente').forEach(chk => {  //Obtener todos elementos del checkbox (evento,funcion), setear evento a elementos
    chk.addEventListener('click', handleCheckCliente); // Asigna evento a cada checkbox individual
    });

}

// ============================
// FUNCION PARA AGREGAR CLIENTES
// ============================

const agregarCliente = () => {

    const clienteNuevo = { 
        codigo: 0, 
        nombre: 'Cliente agregado', 
        correo: 'cliente@agregado.com', 
        telefono: '4444-4488' 
    };

    clientes.push(clienteNuevo); // Agregar al arreglo
    cargarClientesHtml(); // Recargar la tabla

    localStorage.setItem('clientes', JSON.stringify(clientes)); // Guardar en localStorage y no se borre al refrescar
}


// ============================
// FUNCIÓN SALUDAR
// ============================

const saludar = () => {
    console.log('Hola, bienvenido!');
}

  // ============================
// FUNCIÓN mostrarTarjetaCliente
// ============================

const mostrarTarjetaCliente = (cliente) => {

    const tarjeta = document.querySelector('.card');

    const titulo = tarjeta.querySelector('.card-title'); 
    const parrafo = tarjeta.querySelector('.card-text'); 

    titulo.textContent = cliente.codigo + ' - ' + cliente.nombre;
    parrafo.textContent = 'Teléfono: ' + cliente.telefono;        
};

// ============================
// FUNCIÓN handleCheckCliente
// ============================

const handleCheckCliente = (event) => {
  console.log('handle check cliente');
  console.log(event);

  const checkbox = event.target; //Accesar a target del elemento
  const codigoCliente = checkbox.dataset.id; //Obtener ID

  console.log({codigoCliente});

  const cliente = clientes.find(c => c.codigo == codigoCliente); //Buscar dentro del arreglo cliente
  
  if(cliente) {
    console.log(cliente);

    mostrarTarjetaCliente(cliente);

  } else {
    console.log('El cliente no se encuentra');
  }


}


