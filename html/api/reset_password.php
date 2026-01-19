<?php
// reset_password.php
require 'db_connect.php';

$message = '';
$token = $_GET['token'] ?? '';
$validToken = false;
$email = '';

// 1. Verify Token
if ($token) {
    $stmt = $pdo->prepare("SELECT email FROM password_resets WHERE token = ? AND expires_at > NOW()");
    $stmt->execute([$token]);
    $row = $stmt->fetch();

    if ($row) {
        $validToken = true;
        $email = $row['email'];
    } else {
        $message = "<div style='color: red;'>Invalid or expired token.</div>";
    }
}

// 2. Handle Password Update
if ($_SERVER["REQUEST_METHOD"] == "POST" && $validToken) {
    $pass1 = $_POST['password'];
    $pass2 = $_POST['confirm_password'];

    if ($pass1 === $pass2) {
        $hashed = password_hash($pass1, PASSWORD_DEFAULT);

        // Update User Password
        $update = $pdo->prepare("UPDATE users SET password_hash = ? WHERE email = ?");
        $update->execute([$hashed, $email]);

        // Delete Token
        $pdo->prepare("DELETE FROM password_resets WHERE email = ?")->execute([$email]);

        $message = "<div style='color: green;'>Password updated! You can now <a href='login.php'>login</a>.</div>";
        $validToken = false; // Hide form
    } else {
        $message = "<div style='color: red;'>Passwords do not match.</div>";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Reset Password</title>
    <style>
        body { font-family: sans-serif; padding: 50px; background: #f4f4f9; display: flex; justify-content: center; }
        .box { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); width: 100%; max-width: 400px; }
        input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; box-sizing: border-box; }
        button { width: 100%; padding: 10px; background: #28a745; color: white; border: none; cursor: pointer; }
        button:hover { background: #218838; }
    </style>
</head>
<body>
    <div class="box">
        <h2>Set New Password</h2>
        <?php echo $message; ?>
        
        <?php if ($validToken): ?>
        <form method="post">
            <input type="password" name="password" required placeholder="New Password">
            <input type="password" name="confirm_password" required placeholder="Confirm New Password">
            <button type="submit">Update Password</button>
        </form>
        <?php endif; ?>
    </div>
</body>
</html>