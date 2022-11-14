 <!DOCTYPE html>
<html lang="es">
<head>
  <title>Actualizar</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>
</head>
<body>

 <?php

require('config.php');

$id = $_POST['id'];


$sql = "SELECT * FROM productos WHERE id=$id";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {

      ?>

      <div class="container">
  <h2>Actualización de clientes</h2>
  <form action="actualizar2.php" method="POST">
    <div class="form-group">
      <label>Codigo:</label>
      <input type="text" class="form-control" value=" <?php echo $row['codigo'] ?> " id="id" placeholder="Ingrese aquí el código" name="id" readonly>
    </div>
    <div class="form-group">
      <label>Nombre:</label>
      <input type="text" class="form-control" value=" <?php echo $row['nom_produc'] ?> " id="nombre" placeholder="Ingrese aquí su nombre" name="nombre">
    </div>
    <div class="form-group">
      <label>Marca:</label>
      <input type="text" class="form-control" value=" <?php echo $row['marca'] ?> " id="marca" placeholder="Ingrese aquí marca" name="marca">
    </div>
    <div class="form-group">
      <label>Precio:</label>
      <input type="text" class="form-control" value=" <?php echo $row['precio'] ?> " id="precio" placeholder="Ingrese aquí el precio" name="precio">
    </div>
    <div class="form-group">
      <label>Cantidad:</label>
      <input type="text" class="form-control" value=" <?php echo $row['cantidad'] ?> " id="cantidad" placeholder="Ingrese aquí su correo" name="cantidad">
    </div>
    <button type="submit" class="btn btn-primary">Actualizar</button>
  </form>
</div>

  <?php

    }


} else {



?>

<!-- The Modal -->
  
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Error</h4>
          <button class="close" onclick="location.href='../index.html'">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          
 		<?php
        echo "Esa persona no existe " . "<br>";
		?>


        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button class="btn btn-danger" onclick="location.href='../index.html'">Cerrar</button>
        </div>
        
      </div>
    </div>



 <?php


}

mysqli_close($conn);
?> 