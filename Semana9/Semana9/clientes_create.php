<?php

require_once 'init.php';
require_login();

$errors = [];
$success = false;

if($_SERVER['REQUEST_METHOD']  === 'POST') {

    $nombre = trim(string: $_POST['nombre'] ?? '');
    $email = trim(string: $_POST['email'] ?? '');
    $telefono = trim(string: $_POST['telefono'] ?? '');
    $direccion = trim(string: $_POST['direccion'] ?? '');
    
    if($nombre === '') $errors[] = 'El nombre es requerido';
    if($email === '') $errors[] = 'El correo electronico es requerido';

    if(empty($errors)) {
        try {

            $stmt = $pdo->prepare(query: "INSERT INTO clientes (nombre, email, telefono, direccion) VALUES (?, ?, ?, ?)");
            $stmt->execute(params: [$nombre, $email, $telefono, $direccion]);
            $success = true;
            redirect(url: 'dashboard.php');

        } catch (Exception $e) {
            $error[] = 'Error al registrar el cliente: '.$e->getMessage();
        }
    }
}

?>


<?php include 'header.php'; ?>

<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Crear cliente</h5>

                <?php if ($errors): ?>
                    <div class="alert alert-danger">
                        <?php foreach ($errors as $er) echo "<div>" . htmlspecialchars($er) . "</div>"; ?>
                    </div>
                <?php endif; ?>

                <form method="post">
                    <div class="mb-3">
                        <label class="form-label">Nombre *</label>
                        <input class="form-control" name="nombre" value="<?= isset($nombre) ? htmlspecialchars($nombre) : '' ?>">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input class="form-control" type="email" name="email" value="<?= isset($email) ? htmlspecialchars($email) : '' ?>">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input class="form-control" name="telefono" value="<?= isset($telefono) ? htmlspecialchars($telefono) : '' ?>">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Dirección</label>
                        <textarea class="form-control" name="direccion"><?= isset($direccion) ? htmlspecialchars($direccion) : '' ?></textarea>
                    </div>
                    <a href="dashboard.php" class="btn btn-secondary">Cancelar</a>
                    <button class="btn btn-success" type="submit">Guardar</button>
                </form>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>