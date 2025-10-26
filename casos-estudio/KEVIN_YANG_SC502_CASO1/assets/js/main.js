document.addEventListener("DOMContentLoaded", function () {
    const btnEnviar = document.querySelector("#btnEnviar");
    btnEnviar.addEventListener("click", validarDatos);

    const btnCargar = document.querySelector("#btnCargar");
    btnCargar.addEventListener("click", cargarDatos);

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', submitFormulario);

});

const validarDatos = () => {
    const nombre = document.querySelector("#nombre").value;
    const apellidos = document.querySelector("#apellidos").value;
    const nota = document.querySelector("#nota").value;

    if (nombre == "") {
        Swal.fire({
            title: "Error al enviar el nombre",
            text: "Por favor, escribe tu nombre en formato de texto",
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    } else if (apellidos == "") {
        Swal.fire({
            title: "Error al enviar los apellidos",
            text: "Por favor, Por favor, escribe tus apellidos en formato de texto",
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    } else if (nota == "") {
        Swal.fire({
            title: "Error al enviar la nota",
            text: "Por favor, ingresa un valor numérico",
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    } else if (nota < 0 || nota > 100) {
        Swal.fire({
            title: "Error al enviar la nota",
            text: "Sólo se permiten valores entre 0 y 100",
            icon: "warning",
            confirmButtonText: "Aceptar",
        });
    } else {
        Swal.fire({
            title: "Enviando...",
            text: "Datos enviados correctamente",
            icon: "success",
            confirmButtonText: "Aceptar",
        });
    }

    agregarEstudiante(nombre, apellidos, nota);

    document.querySelector("#nombre").value = "";
    document.querySelector("#apellidos").value = "";
    document.querySelector("#nota").value = "";


};

const submitFormulario = () => {
    event.preventDefault();

    const formulario = document.querySelector("#formulario");
    const datosFormulario = new FormData(formulario);
    const data = Object.fromEntries(datosFormulario.entries());
};

let estudiantes = [];

const agregarEstudiante = (nombre, apellidos, nota) => {

    const estudiantesGuardados = localStorage.getItem('estudiantes');
    const estudiantesArray = JSON.parse(estudiantesGuardados);

    const estudiante = {
        nombre: nombre,
        apellidos: apellidos,
        nota: nota
    };
    estudiantes.push(estudiante);

    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));

}


const cargarDatos = () => {
    const tbody = document.querySelector("#tbody-section");
    const tabla = document.querySelector("#tabla");

    const estudiantesGuardados = localStorage.getItem('estudiantes');
    const estudiantesArray = JSON.parse(estudiantesGuardados);

    tbody.innerHTML = "";

    if (estudiantesArray == null) {
        Swal.fire({
            title: "No hay datos registrados",
            text: "Intenta agregar datos antes de cargarlos",
            icon: "warning",
            confirmButtonText: "Aceptar",
        });
        return;
    }

    tabla.style.display = "table";



    let numero = 0;

    estudiantes.forEach(estudiante => {
        const fila = document.createElement("tr");

        const celdaNumero = document.createElement("td");
        celdaNumero.textContent = numero += 1;


        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = estudiante.nombre;

        const celdaApellidos = document.createElement("td");
        celdaApellidos.textContent = estudiante.apellidos;

        const celdaNota = document.createElement("td");
        celdaNota.textContent = estudiante.nota;

        fila.appendChild(celdaNumero);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaApellidos);
        fila.appendChild(celdaNota);

        tbody.appendChild(fila);
    });
};