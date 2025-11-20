<?php

require_once 'init.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { //Si no se invoca, devuelve aca, si no devuelve post, lleva a login
    redirect(url: 'login.php');
}

$username = isset($_POST['username']) ? trim(string: $_POST['username']) : '';
$password = isset($_POST['password']) ? trim(string: $_POST['password']) : '';

if ($username === '' || $password === '') {
    redirect('login.php?error=' . urlencode('Usuario y contraseña son requeridos'));
}

//Si pasa (tiene valores los 2 )
try {

    $stmt = $pdo->prepare(query: "SELECT id, username, password FROM usuarios WHERE username = ? LIMIT 1"); // pdo = variable que conecta con la bd
    $stmt->execute(params: [$username]); //Solo definimos 1 parametro
    $user = $stmt->fetch(); //Lo que obtuve de la bd lo guardo en este usuario

    if (!$user) {
        redirect(url: 'login.php?error=' . urlencode(string: 'Usuario no encontrado'));
    }

    if ($password === $user['password']) {
        session_regenerate_id(delete_old_session: true);
        $_SESSION['user_id'] = $user['id']; //Arreglo asociativo, pasamos key
        $_SESSION['username'] = $user['username'];
        redirect('dashboard.php');
    } else {
        redirect(url: 'login.php?error=' . urlencode(string: 'Contrasenia incorrecta'));
    }

} catch (Exception $e) {
    redirect('login.php?error='.urlencode('Error en autenticacion'));
}
