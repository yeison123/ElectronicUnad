
<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password);
// Check connection
if (!$conn) {
die("Conexión fallida: " . mysqli_connect_error());
}

// Create database
$sql = "CREATE DATABASE bdunad301127_35";
if (mysqli_query($conn, $sql)) {
echo "Base de datos creada satisfactoriamente";
} else {
echo "Error creando base de datos: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
