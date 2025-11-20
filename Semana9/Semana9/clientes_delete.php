<?php

require_once 'init.php';
require_login();

$id = isset($_GET['id']) ? intval(value: $GET['id']) : 0;

if ($id <= 0) {
    redirect('dashboard.php');
}

try {

    $stmt = $pdo->prepare("DELETE FROM clientes WHERE id = ?");
    $stmt->execute(params: [$id]);
    redirect(url: 'dashboard.php');

} catch (Exception $e) {
    redirect('dashboard.php?error='.urlencode(string: 'Error al eliminar cliente'));
}
