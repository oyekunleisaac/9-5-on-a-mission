<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "9-5";

$response = ["post" => null];

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare("SELECT id, banner, title, content, date FROM posts WHERE id = :id LIMIT 1");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($row) {
            $row['banner'] = 'images/' . $row['banner'];
            $response["post"] = $row;
        }
    } catch (Exception $e) {
        $response["error"] = $e->getMessage();
    }
} else {
    $response["error"] = "No post id provided.";
}

echo json_encode($response);
