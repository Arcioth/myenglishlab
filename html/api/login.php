<?php
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *'); 
    header('Access-Control-Allow-Methods: POST, OPTIONS'); // Added OPTIONS
    header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Added Authorization

    // Handle the Preflight (OPTIONS) check specifically
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }

    require 'db_connect.php';

    // Get the raw POST data
    $jsonContent = file_get_contents('php://input');
    $input = json_decode($jsonContent, true);

    // Debugging: If you still get errors, uncomment the line below to see what PHP received in your browser's Network tab preview
    // echo json_encode(['debug_received' => $input, 'raw' => $jsonContent]); exit;

    $username = $input['username'] ?? '';
    $password = $input['password'] ?? '';

    if (!$username || !$password) {
        // More descriptive error
        echo json_encode(['success' => false, 'message' => 'Missing credentials (received empty data)']);
        exit;
    }

    // Fetch user
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password_hash'])) {
        
        // Check Expiry
        if ($user['plan_expiry'] && new DateTime($user['plan_expiry']) < new DateTime()) {
            echo json_encode(['success' => false, 'message' => 'Plan expired']);
            exit;
        }

        // Generate Token
        $token = bin2hex(random_bytes(32));
        $update = $pdo->prepare("UPDATE users SET token = ? WHERE id = ?");
        $update->execute([$token, $user['id']]);

        echo json_encode([
            'success' => true,
            'token' => $token,
            'username' => $user['username'],
            'plan' => $user['plan_type'],
            'requests_left' => $user['api_requests_left']
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
    }
?>
