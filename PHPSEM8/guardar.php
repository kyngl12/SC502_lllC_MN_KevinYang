<?php

session_start(); //Permitir acceder a variables de sesion

// $arreglo = [7, 55, 86, 7];
// echo $arreglo[1];

// $colores = ['rojo', 'verde'];

// //ARREGLOS ASOCIATIVOS (PARES VALORES)
// $persona = [
//     "nombre" => "Kevin",
//     "correo" => "correo@gmail.com",
//     "telefono" => "88888888"
// ];

// echo $persona["nombre"];

// $personas = [ //Arreglo indexado de arreglos asociativos
//      [
//         "nombre" => "Kevin",
//         "correo" => "correo@gmail.com",
//         "telefono" => "88888888"
//      ],
//       [
//         "nombre" => "Kevin",
//         "correo" => "correo@gmail.com",
//         "telefono" => "88888888"
//       ]
// ];

// $personas[1]["correo"];
    

if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
    $nombre = trim($_POST['nombre'] ?? ''); //Si es nulo asigna cadena vacia
    $correo = trim($_POST['correo'] ?? '');
    $telefono = trim($_POST['telefono'] ?? '');

    if ($nombre && $correo && $telefono) {
        if (!isset($_SESSION['personas'])) {  //Interatuar con variables de sesion
            $_SESSION['personas'] = []; // Crear arreglo si no existe
        }

        // Agregar nueva persona al arreglo de sesión
        $_SESSION['personas'][] = [
            'nombre' => $nombre,
            'correo' => $correo,
            'telefono' => $telefono
        ];
    }
}

//var_dump($_SESSION['personas']); //Imprimir en pantalla tipo y contenido de variable
//exit;

header('Location: index.php'); //Redireccionar a index.php



?>