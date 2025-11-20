<?php
require_once 'init.php';

if (isset($_SESSION['user_id'])) {
    redirect('dashboard.php');
}

?>

<?php include 'header.php' ?>

<div class="row justify-content-center">
    <div class="col-md-5">
        <div class="card shadow-sm">
            <div class="card-body">
                <h4 class="card-title mb-3">Iniciar sesión</h4>

                <?php if (isset($_GET['error'])): ?>

                    <div class="alert alert-danger"><?= $_GET['error'] ?></div>

                <?php endif; ?>

                <form action="authenticate.php" method="post">
                    <div class="mb-3">
                        <label for="username" class="form-label">Usuario</label>
                        <input type="text" name="username" id="username" class="form-control"autofocus>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" name="password" id="password" class="form-control">
                        <div class="form-text">La contraseña está en texto plano (según requerimiento).</div>
                    </div>
                    <button class="btn btn-primary w-100" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php' ?>