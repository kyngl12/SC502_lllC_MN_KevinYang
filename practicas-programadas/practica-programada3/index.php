<?php
session_start();

if (!isset($_SESSION['transacciones'])) {
    $_SESSION['transacciones'] = [];
}

if (isset($_GET['limpiar'])) {
    $_SESSION['transacciones'] = [];
    header("Location: index.php");
    exit;
}

function generarEstadoDeCuenta($transacciones)
{
    $total = 0;

    foreach ($transacciones as $t) {
        $total += $t['monto'];
    }

    $interes = $total * 0.026;
    $totalConInteres = $total + $interes;
    $cashback = $total * 0.001;
    $final = $totalConInteres - $cashback;

    return [
        "total" => $total,
        "interes" => $interes,
        "totalConInteres" => $totalConInteres,
        "cashback" => $cashback,
        "final" => $final
    ];
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" />
    <title>Práctica Programada 3 Kevin Yang</title>
</head>

<body>

    <div class="container mt-5">

        <div class="card shadow-sm">

            <div class="card-header bg-primary text-white">
                <h4 class="mb-0">Registro de Transacciones</h4>
            </div>

            <div class="card-body">

                <form class="row" method="post" action="guardar.php">
                    <div class="col-md-4">
                        <label class="form-label" for="id">ID</label>
                        <input class="form-control" type="number" name="id" required />
                    </div>

                    <div class="col-md-4">
                        <label class="form-label" for="descripcion">Descripción</label>
                        <input class="form-control" type="text" name="descripcion" required />
                    </div>

                    <div class="col-md-4">
                        <label class="form-label" for="monto">Monto</label>
                        <input class="form-control" type="number" step="0.01" name="monto" required />
                    </div>

                    <div class="col-12 text-end mt-3">
                        <button type="submit" class="btn btn-primary">Agregar</button>
                        <a href="?limpiar=1" class="btn btn-danger">Limpiar datos</a>
                    </div>
                </form>

                <hr>

                <?php if (!empty($_SESSION['transacciones'])): ?>

                    <h5 class="mb-3">Transacciones Registradas</h5>

                    <div class="table-responsive">
                        <table class="table table-striped table-hover align-middle">
                            <thead class="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Descripción</th>
                                    <th>Monto</th>
                                </tr>
                            </thead>

                            <tbody>

                                <?php foreach ($_SESSION['transacciones'] as $transac): ?>
                                    <tr>
                                        <td><?= $transac['id'] ?></td>
                                        <td><?= $transac['descripcion'] ?></td>
                                        <td>₡<?= $transac['monto'] ?></td>
                                    </tr>

                                <?php endforeach; ?>

                            </tbody>
                        </table>
                    </div>

                    <?php
                    $resultadoFinal = generarEstadoDeCuenta($_SESSION['transacciones']);
                    ?>
                    <div class="mt-3">

                        <table class="table table-bordered border-primary">
                            <thead class="table-primary">
                                <tr>
                                    <th>Descripción</th>
                                    <th>Monto</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><strong>Total de contado</strong></td>
                                    <td>₡<?= $resultadoFinal['total'] ?></td>
                                </tr>

                                <tr>
                                    <td><strong>Total con 2.6% de interés</strong></td>
                                    <td>₡<?= $resultadoFinal['totalConInteres'] ?></td>
                                </tr>

                                <tr>
                                    <td><strong>Cashback</strong></td>
                                    <td>₡<?= $resultadoFinal['cashback'] ?></td>
                                </tr>

                                <tr class="table-success">
                                    <td><strong>Monto final</strong></td>
                                    <td><strong>₡<?= $resultadoFinal['final'] ?></strong></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                <?php else: ?>

                    <div class="alert alert-info">
                        <span>No hay transacciones registradas</span>
                    </div>

                <?php endif; ?>

            </div>

            <div class="card-header bg-primary text-white"></div>

        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>