<?php
// Get database configuration from Railway environment variables
$mysql_url = getenv('mysql://root:DDtLNZkyCGOtyuDtOZLITbQcJdfEDZZH@mysql.railway.internal:3306/railway');

if (!$mysql_url) {
    die("Missing MYSQL_URL environment variable");
}

// Parse the MySQL URL from Railway
$url = parse_url($mysql_url);

$servername = $url['host'];
$username = $url['user'];
$password = $url['pass'];
$dbname = ltrim($url['path'], '/');
$port = isset($url['port']) ? $url['port'] : 3306;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set character set to utf8mb4
$conn->set_charset("utf8mb4");

// For debugging (remove in production)
// echo "Connected successfully to Railway database";
?>