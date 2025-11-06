<?php

//Inicializar sesiones (usar variables sesion)
session_start();

require_once __DIR__.'/config.php'; //Importar contenido de otro archivo php

function redirect($url): void {
    header("Location: $url"); //URL a la que se redirige
    exit();
}

function require_login(): void { //Si la sesion de usuario no exsise, lleva login
    if(!isset($_SESSION['user_id'])) {
        redirect('login.php');
    }
}

function current_user(): mixed {
    if (isset($_SESSION['user_id'])) return null;
        
    global $pdo;
    $stmt = $pdo->prepare(query: "SELECT id,username,nombre FROM usuarios WHERE id=?");
    $stmt->execute([$_SESSION['user_id']]);
    return $stmt->fetch(); //Si encuentra usuario, lo devuelve como arreglo asociativo
}
