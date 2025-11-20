<?php

require_once 'init.php'; // Importamos lo que tenga init
require_login(); // Llamamos función

$user = current_user();

$stmt = $pdo->query("SELECT id, nombre, email, telefono FROM clientes ORDER BY id DESC");
$stmt->execute(); // Asegúrate de ejecutar la consulta
$clientes = $stmt->fetchAll(); // Trae todos los clientes como arreglo asociativo (key y valor)

?>

<?php include 'header.php' ?>

<div class="d-flex justify-content-between align-items-center mb-3">
    <h3>Dashboard</h3>
    <div>
        <span class="me-2">Hola, <strong><?= $user['nombre'] ?? $user['username'] ?></strong></span>
        <a href="logout.php" class="btn btn-outline-danger btn-sm">Logout</a>
    </div>
</div>

<?php if (isset($_GET['error'])): ?>
    <div class="alert alert-danger"><?= $_GET['error'] ?></div>
<?php endif; ?>

<div class="card mb-4">
    <div class="card-body">
        <div class="d-flex justify-content-between mb-3">
            <h5 class="card-title">Clientes</h5>
            <a href="clientes_create.php" class="btn btn-success btn-sm">Nuevo cliente</a>
        </div>

        <?php if (count($clientes) === 0): ?>

            <div class="alert alert-info">
                No hay clientes registrados
            </div>

        <?php else: ?>

            <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover align-middle">
                    <thead class="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        <?php foreach ($clientes as $cliente): ?>

                            <tr>
                                <td><?= htmlspecialchars($cliente['id']) ?></td>
                                <td><?= htmlspecialchars($cliente['nombre']) ?></td>
                                <td><?= htmlspecialchars($cliente['email']) ?></td>
                                <td><?= htmlspecialchars($cliente['telefono']) ?></td>
                                <td>
                                    <a href="clientes_edit.php?id=<?= $cliente['id'] ?>" class="btn btn-sm btn-primary">Editar</a>
                                    <a href="clientes_delete.php?id=<?= $cliente['id'] ?>" class="btn btn-sm btn-danger" onclick="return confirm('Eliminar cliente?')">Eliminar</a>
                                </td>
                            </tr>

                        <?php endforeach; ?>

                    </tbody>
                </table>
            </div>

        <?php endif; ?>

    </div>
</div>

</div>

<?php include 'footer.php' ?>