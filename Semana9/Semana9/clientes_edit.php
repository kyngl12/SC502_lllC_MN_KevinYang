<?php

require_once 'init.php';
require_login();

$id = isset($_GET['id']) ? intval($_GET['id']) : 0;  //Validacion de seguridad


if ($id <= 0) {
    redirect('dashboard.php');
}

//Obtener el cliente de la base de datos

$stmt = $pdo->prepare("SELECT * FROM clientes WHERE id = ?");
$stmt->execute([$id]);
$cliente = $stmt->fetch();

if (!$cliente) {
    redirect(url: 'dashboard.php?error=' . urlencode(string: 'Cliente no encontrado'));
}

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim(string: $_POST['nombre'] ?? '');
    $email = trim(string: $_POST['email'] ?? '');
    $telefono = trim(string: $_POST['telefono'] ?? '');
    $direccion = trim(string: $_POST['direccion'] ?? '');

    if ($nombre === '') $errors[] = 'El nombre es requerido';
    if ($email === '') $errors[] = 'El correo electronico es requerido';

    if (empty($errors)) {
        try {

            $stmt = $pdo->prepare(query: "UPDATE clientes SET nombre = ?, email = ?, telefono = ?, direccion = ? WHERE id = ?");
            $stmt->execute(params: [$nombre, $email, $telefono, $direccion, $id]);
            redirect(url: 'dashboard.php');
        } catch (Exception $e) {
            $error[] = 'Error al editar el cliente: ' . $e->getMessage();
        }
    }
}

?>


<?php include 'header.php'; ?>
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Editar cliente #<?= htmlspecialchars($cliente['id']) ?></h5>

                <?php if ($errors): ?>
                    <div class="alert alert-danger">
                        <?php foreach ($errors as $er) echo "<div>" . htmlspecialchars($er) . "</div>"; ?>
                    </div>
                <?php endif; ?>

                <form method="post">
                    <div class="mb-3">
                        <label class="form-label">Nombre *</label>
                        <input class="form-control" name="nombre" required value="<?= htmlspecialchars($cliente['nombre']) ?>">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input class="form-control" type="email" name="email" value="<?= htmlspecialchars($cliente['email']) ?>">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input class="form-control" name="telefono" value="<?= htmlspecialchars($cliente['telefono']) ?>">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Dirección</label>
                        <textarea class="form-control" name="direccion"><?= htmlspecialchars($cliente['direccion']) ?></textarea>
                    </div>
                    <a href="dashboard.php" class="btn btn-secondary">Cancelar</a>
                    <button class="btn btn-primary" type="submit">Actualizar</button>
                </form>
            </div>
        </div>
    </div>