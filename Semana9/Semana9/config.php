<?php
//Para hacer conexión a la base de datos
//$db_host = 'localhost';
$db_host = '127.0.0.1';
$db_name = 'mi_app_db';
$db_user = 'root';
$db_pass = '197324';
$db_charset = 'utf8mb4';
$db_port = '3306';

//PDO permite conectarme a la BD
$dsn = "mysql:host=$db_host;dbname=$db_name;charset=$db_charset";

//Configuraciones adicionales para la conexión PDO
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO(dsn:$dsn, username:$db_user, password:$db_pass, options:$options);
} catch (PDOException $e) {
    exit("Error de conexión a la base de datos: " . $e->getMessage());
}