<?php
// forgot_password.php
require 'db_connect.php';
require 'mail_config.php';

$message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email']);

    // Check if user exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user) {
        // Generate secure token
        $token = bin2hex(random_bytes(32));
        $expiry = date("Y-m-d H:i:s", strtotime('+1 hour'));

        // Remove old tokens for this email
        $pdo->prepare("DELETE FROM password_resets WHERE email = ?")->execute([$email]);

        // Insert new token
        $stmt = $pdo->prepare("INSERT INTO password_resets (email, token, expires_at) VALUES (?, ?, ?)");
        $stmt->execute([$email, $token, $expiry]);

        // Create Link
        $protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') ? "https" : "http";
        $host = $_SERVER['HTTP_HOST'];
        $path = dirname($_SERVER['PHP_SELF']);
        $resetLink = "$protocol://$host$path/reset_password.php?token=$token";

        // Send Email
        if (sendPasswordResetEmail($email, $resetLink)) {
            $message = "<div style='color: green;'>Reset link sent! Check your email.</div>";
        } else {
            $message = "<div style='color: red;'>Error sending email. Check logs.</div>";
        }
    } else {
        // Security: Don't reveal if email doesn't exist
        $message = "<div style='color: green;'>If that email exists, we sent a link.</div>";
    }
}
?>
