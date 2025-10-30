 <?php
    session_start(); //Iniciar sesion para acceder a variables de sesion

    if (!isset($_SESSION['personas'])) {
        $_SESSION['personas'] = [];
    }

    if (isset($_GET['limpiar'])) {
        $_SESSION['personas'] = []; //Limpiar arreglo de personas en sesion
        header('Location: index.php');
        exit;
    }

    ?>

 <!DOCTYPE html>
 <html lang="en">

 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="assets/css/style.css" />
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous" />
     <title>Primer ejercicio php</title>
 </head>

 <body>

     <?php

        $nombre = "Kevin Yang";

        $edad = 19;

        //if ($edad >= 18) {
        // echo "Es mayor de edad";
        // } else {
        // echo "Es menor de edad";
        // }


        ?>



     <div class="container mt-5">

         <div class="card shadow-sm">

             <div class="card-header bg-primary text-white">
                 <h4 class="mb-0">Registro de personas</h4>
             </div>

             <div class="card-body">

                 <form class="row" method="post" action="guardar.php">
                     <div class="col-md-4">
                         <label class="form-label" for="nombre">Nombre</label>
                         <input class="form-control" type="text" name="nombre" />
                     </div>
                     <div class="col-md-4">
                         <label class="form-label" for="correo">Correo</label>
                         <input class="form-control" type="email" name="correo" />
                     </div>
                     <div class="col-md-4">
                         <label class="form-label" for="telefono">Telefono</label>
                         <input class="form-control" type="text" name="telefono" />
                     </div>

                     <div class="col-12 text-end mt-3">
                         <button type="submit" class="btn btn-primary">Agregar</button>
                         <a href="?limpiar=1" class="btn btn-danger">Limpiar datos</a>
                     </div>
                 </form>

                 <hr>

                 <?php if (!empty($_SESSION['personas'])): ?>



                     <h5 class="mb-3">Personas Registradas</h5>
                     <div class="table-responsive">
                         <table class="table table-striped table-hover align-middle">
                             <thead class="table-dark">
                                 <tr>
                                     <th>#</th>
                                     <th>Nombre</th>
                                     <th>Correo</th>
                                     <th>Telefono</th>
                                 </tr>
                             </thead>
                             <tbody>

                                 <?php foreach ($_SESSION['personas'] as $index => $persona): ?>

                                     <tr>
                                         <td> <?= $index +1 ?></td>
                                         <td> <?=$persona['nombre'] ?></td>
                                         <td> <?=$persona['correo'] ?></td>
                                         <td> <?=$persona['telefono'] ?></td>
                                     </tr>

                                 <?php endforeach; ?>

                             </tbody>
                         </table>
                     </div>

                 <?php else: ?>

                     <div class="alert alert-info">
                         <span>No hay personas registradas</span>
                     </div>

                 <?php endif; ?>

             </div>


             <div class="card-header bg-primary text-white">

             </div>

         </div>

         <script
             src=" https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
             integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
             crossorigin="anonymous">
         </script>
 </body>

 </html>