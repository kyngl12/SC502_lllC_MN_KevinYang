document.addEventListener("DOMContentLoaded", function () {
//////////////////EJ 1///////////////////////////////////////
  const button1 = document.querySelector("#btnCargarParrafo");
  button1.addEventListener("click", cambiarParrafo);
/////////////////////////////////////////////////////////////

//////////////////EJ 2///////////////////////////////////////
  const button2 = document.querySelector("#btnCargarEdad");
  button2.addEventListener("click", evaluarEdad);
/////////////////////////////////////////////////////////////
});

// ============================
// EJERCICIO 1
// ============================

// ============================
// EJERCICIO 2
// ============================
const cambiarParrafo = () => {
  const parrafo = document.querySelector("#parrafo");
  parrafo.textContent = `Me llamo Kevin, esta es la práctica programada número 2 del curso
          de Ambiente Web/Cliente Servidor. Usando JavaScript, este es el párrafo nuevo, el que está
          reemplazando al anterior gracias al uso de JavaScript.`;
};
// ============================
// EJERCICIO 3
// ============================
const evaluarEdad = () => {
  const edad = document.querySelector("#edadUsuario").value; 
  const salida = document.querySelector("#mensajeEdad");

  if (edad > 18) {          
    salida.textContent = "Eres mayor de edad";
  } else {
    salida.textContent = "Eres menor de edad";
  }
}

// ============================
// EJERCICIO 4
// ============================
const estudiantes = [
  { nombre: 'Martín', apellido: 'Pérez', nota: 82 },
  { nombre: 'Julia', apellido: 'García', nota: 92 },
  { nombre: 'Carlos', apellido: 'Mora', nota: 78 },
  { nombre: 'Fran', apellido: 'Jiménez', nota: 88 },
  { nombre: 'Andrés', apellido: 'Fernández', nota: 95 }
];

