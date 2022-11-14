




<?php
// variables

date_default_timezone_set("America/Bogota");

require('config.php');



//Para utilizar Mysqldump y realizar el respaldo, se debe declarar una variable haciendo referencia a la ubicacion del archivo mysqldump.exe
$mysqldump='"../../../MySQL/bin/mysqldump.exe"';
$backup_file = '"../backups/"'.$dbname. "-" .date("Y-m-d-H-i-s"). ".sql";
system("$mysqldump --no-defaults -u $username -p$password $dbname > $backup_file",$output);


//var_dump($output);  //para mostrar el resultado de la operación, 0 satisfactoria, 1 error en path, 2 error en conexión a base de datos


switch($output){
case 0:


?>

          
    <?php
        echo 'La base de datos <b>' .$dbname .'</b> se ha almacenado correctamente en la siguiente ruta '.getcwd().'/' .$backup_file .'</b>';
    ?>



 <?php

break;
case 1:


?>

    <?php
        echo 'Se ha producido un error al exportar <b>' .$dbname .'</b> a '.getcwd().'/ verifique la siguiente ruta: ' .$backup_file .'</b>';
    ?>


    



 <?php



break;
case 2:

?>

    <?php
        echo 'Se ha producido un error de exportación, compruebe la siguiente información: <br/><br/><table><tr><td>Nombre de la base de datos:</td><td><b>' .$dbname .'</b></td></tr><tr><td>Nombre de usuario MySQL:</td><td><b>' .$username .'</b></td></tr><tr><td>Contraseña MySQL:</td><td><b> '.$password.' </b></td></tr><tr><td>Nombre de host MySQL:</td><td><b>' .$servername .'</b></td></tr></table>';
    ?>


     
 <?php


break;
}


mysqli_close($conn);
?>

