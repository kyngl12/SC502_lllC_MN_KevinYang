document.addEventListener("DOMContentLoaded", function () {
//////////////////EJ 1///////////////////////////////////////
const button1 = document.querySelector("#btnCargarSalario");
button1.addEventListener("click", calculos);
/////////////////////////////////////////////////////////////
//////////////////EJ 2///////////////////////////////////////
  const button2 = document.querySelector("#btnCargarParrafo");
  button2.addEventListener("click", cambiarParrafo);
/////////////////////////////////////////////////////////////

//////////////////EJ 3///////////////////////////////////////
  const button3 = document.querySelector("#btnCargarEdad");
  button3.addEventListener("click", evaluarEdad);
/////////////////////////////////////////////////////////////

//////////////////EJ 4///////////////////////////////////////
const button4  = document.querySelector('#btnCargar'); 
 button4.addEventListener('click', cargarEstudiantes);
 button4.addEventListener('click', promedioEstudiantes);
 
});

// ============================
// EJERCICIO 1
// ============================

const calculos = () => {
  //Cargas Sociales
  const salarioBruto = document.querySelector("#salarioBruto").value;
  const totalCargas = salarioBruto * 0.1067;
  document.querySelector("#totalCargas").textContent = "₡" + totalCargas;

  //Impuesto sobre la Renta
  let totalImpuestoRenta = 0;
   if(salarioBruto <= 922000) {
      totalImpuestoRenta = 0;
} else if (salarioBruto <= 1352000) {
  totalImpuestoRenta = (salarioBruto - 922000) * 0.10;
} else if (salarioBruto <= 2373000) {
  totalImpuestoRenta = (1352000 - 922000) * 0.10 + (salarioBruto - 1352000) * 0.15;
} else if (salarioBruto <= 4745000) {
  totalImpuestoRenta =  (1352000 - 922000) * 0.10 + (2373000 - 1352000) * 0.15 + (salarioBruto - 2373000) * 0.20;
} else if (salarioBruto > 4745000) {
  totalImpuestoRenta = (1352000 - 922000) * 0.10 + (2373000 - 1352000) * 0.15 + (4745000 - 2373000) * 0.20 + (salarioBruto - 4745000) * 0.25;
};
   document.querySelector("#totalImpuestoRenta").textContent = "₡" + totalImpuestoRenta;

  //Salario Neto
  const totalSalarioNeto = salarioBruto - totalCargas - totalImpuestoRenta;
  document.querySelector("#totalSalarioNeto").textContent = "₡" + totalSalarioNeto;
};

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

const cargarEstudiantes = () => {
  const tbody = document.querySelector("#tbody-section");
  tbody.innerHTML = ""; 

  estudiantes.forEach(estudiante => {
    const fila = document.createElement("tr");


    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = estudiante.nombre;

    const celdaApellido = document.createElement("td");
    celdaApellido.textContent = estudiante.apellido;

    const celdaNota = document.createElement("td");
    celdaNota.textContent = estudiante.nota;

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellido);
    fila.appendChild(celdaNota);

    tbody.appendChild(fila);
  });
};

const promedioEstudiantes = () => {
  let notas = 0;
  estudiantes.forEach(estudiante => {
    notas += estudiante.nota;
  });
  const promedio = notas / estudiantes.length;
  const salida = document.querySelector("#promedio");
  salida.textContent = promedio;
};



