<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "9-5";

$response = ["posts" => []];

try {
    // $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn = new PDO("mysql:host=127.0.0.1;dbname=$dbname", $username, $password);   
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->query("SELECT id, banner, title, content, date FROM posts ORDER BY date DESC LIMIT 12");
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // Prepend images/ to banner if needed
        $row['banner'] = 'images/' . $row['banner'];
        $response["posts"][] = $row;
    }
} catch (Exception $e) {
    $response["error"] = $e->getMessage();
}

echo json_encode($response);
