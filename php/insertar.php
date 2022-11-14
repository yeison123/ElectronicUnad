



 <?php

require('config.php');

$i = $_POST['codigo'];
$n = $_POST['nom_produc'];
$m = $_POST['marca'];
$p = $_POST['precio'];
$c = $_POST['cantidad'];



$sql = "INSERT INTO productos (id, nombre_producto, marca, precio_compra,cantidad) VALUES ('$i', '$n', '$m', '$p','$c' )";

if (mysqli_query($conn, $sql)) {
 
?>


 <?php
} else 
{



?>

<!-- The Modal -->
  
    
        
        <!-- Modal body -->

          <?php
          echo "Error grabando datos: <br>" . $sql . "<br>" . mysqli_error($conn);
          ?> 

        </div>

        
        <!-- Modal footer -->
      


 <?php

 //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
 //  echo '<script language="javascript">alert("Datos grabados satisfactoriamente'.$i.'");window.location.href="form_insertar.html"</script>';

}

mysqli_close($conn);

?> 