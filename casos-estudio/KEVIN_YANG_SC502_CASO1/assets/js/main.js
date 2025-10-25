document.addEventListener("DOMContentLoaded", function () {
    const btnEnviar = document.querySelector("#btnEnviar");
    btnEnviar.addEventListener("click", validarDatos);

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
};

const submitFormulario = () => {
    event.preventDefault();

    const formulario = document.querySelector("#formulario");
    const datosFormulario = new FormData(formulario);
    const data = Object.fromEntries(datosFormulario.entries());
};


const agregarEstudiante = () => {
    
}


const cargarDatos = () => {

};