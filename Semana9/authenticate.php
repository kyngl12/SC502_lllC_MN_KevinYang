<?php

require_once 'init.php';

if($_SERVER['REQUEST_METHOD'] !== 'POST') { //Si no se invoca, devuelve aca
    redirect(url:'login.php');
}

$username = isset($_POST['username']) ? trim(string:$_POST['username']) : '';
$password =isset ($_POST['password']) ? trim(string:$_POST['password']) : '';

if ($username === '' || $password === '') {
    redirect('login.php?error='.urlencode('Usuario y contraseña son requeridos'));
}