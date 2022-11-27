 <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bdunad301127_35";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// sql to create table
$sql = "CREATE TABLE productos (
id INT(10) PRIMARY KEY,
nombre_producto VARCHAR(250),
marca VARCHAR(250),
precio_compra FLOAT,
cantidad INT
)";

if (mysqli_query($conn, $sql)) {
    echo "Tabla de producto creada satisfactoriamente";
} else {
    echo "Error creando tabla producto: " . mysqli_error($conn);
}

mysqli_close($conn);
?> 