<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Database configuration
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "9-5";

$response = [
    "success" => false,
    "message" => "",
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Validate form data
        if (empty($_POST['title']) || empty($_POST['content']) || empty($_POST['date'])) {
            throw new Exception("All fields are required.");
        }

        // Handle file upload
        $banner_filename = "";
        if (isset($_FILES['banner']) && $_FILES['banner']['error'] == 0) {
            $upload_dir = "images/";
            if (!file_exists($upload_dir)) {
                mkdir($upload_dir, 0755, true);
            }

            $allowed_types = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            $file_info = finfo_open(FILEINFO_MIME_TYPE);
            $file_mime = finfo_file($file_info, $_FILES['banner']['tmp_name']);
            finfo_close($file_info);

            if (!in_array($file_mime, $allowed_types)) {
                throw new Exception("Invalid file type. Only JPG, PNG, GIF, and WEBP files are allowed.");
            }

            if ($_FILES['banner']['size'] > 10 * 1024 * 1024) {
                throw new Exception("File size must be less than 10MB.");
            }

            $file_extension = pathinfo($_FILES['banner']['name'], PATHINFO_EXTENSION);
            $banner_filename = uniqid() . '_' . time() . '.' . $file_extension;
            $upload_path = $upload_dir . $banner_filename;

            if (!move_uploaded_file($_FILES['banner']['tmp_name'], $upload_path)) {
                throw new Exception("Failed to upload image.");
            }
        } else {
            throw new Exception("Banner image is required.");
        }

        // Insert into database
        $stmt = $conn->prepare("INSERT INTO posts (banner, title, content, date) VALUES (:banner, :title, :content, :date)");
        $stmt->bindParam(':banner', $banner_filename);
        $stmt->bindParam(':title', $_POST['title']);
        $stmt->bindParam(':content', $_POST['content']);
        $stmt->bindParam(':date', $_POST['date']);

        $stmt->execute();

        $response["success"] = true;
        $response["message"] = "Post uploaded successfully!";
    } catch(PDOException $e) {
        $response["message"] = "Database error: " . $e->getMessage();
    } catch(Exception $e) {
        $response["message"] = $e->getMessage();
        if (!empty($banner_filename) && file_exists($upload_dir . $banner_filename)) {
            unlink($upload_dir . $banner_filename);
        }
    }
    $conn = null;
} else {
    $response["message"] = "Invalid request method.";
}

echo json_encode($response);