<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = trim($_POST["id"] ?? "");
    $descripcion = trim($_POST["descripcion"] ?? "");
    $monto = trim($_POST["monto"] ?? ""); 

    if ($id && $descripcion && $monto) {

        if (!isset($_SESSION['transacciones'])) {
            $_SESSION['transacciones'] = [];
        }

        $_SESSION['transacciones'][] = [
            "id" => $id,
            "descripcion" => $descripcion,
            "monto" => $monto 
        ];
    }
}

header("Location: index.php");
exit;
?>


