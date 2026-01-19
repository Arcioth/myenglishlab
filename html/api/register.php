<?php
session_start();
require 'db_connect.php';
require 'mail_config.php';

$error = "";
$success = "";
$step = 1; // 1=Form, 2=Verify

// STEP 1: Process Initial Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['action']) && $_POST['action'] == 'start_register') {
    $user = trim($_POST['username']);
    $email = trim($_POST['email']);
    $pass = $_POST['password'];

    // Check duplicates
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username=? OR email=?");
    $stmt->execute([$user, $email]);
    if ($stmt->rowCount() > 0) {
        die("<h3>Error: Username or Email already taken. <a href='register.html'>Go Back</a></h3>");
    }

    // Generate Code
    $code = rand(100000, 999999);
    $expiry = date("Y-m-d H:i:s", strtotime("+15 minutes"));

    // Save Code
    $stmt = $pdo->prepare("INSERT INTO verification_codes (email, code, type, expires_at) VALUES (?, ?, 'REGISTER', ?)");
    $stmt->execute([$email, $code, $expiry]);

    // Send Email
    $body = "<h2>Welcome to Pearson Solver!</h2><p>Your verification code is: <b style='font-size:24px'>$code</b></p>";
    if (sendEmail($email, "Verify Your Account", $body)) {
        // Save temporary data to session
        $_SESSION['reg_temp'] = ['user' => $user, 'email' => $email, 'pass' => $pass];
        $step = 2;
    } else {
        die("<h3>Error: Failed to send verification email. check server logs. <a href='register.html'>Go Back</a></h3>");
    }
}

// STEP 2: Verify Code Submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['action']) && $_POST['action'] == 'verify_code') {
    $code = trim($_POST['code']);
    
    if (!isset($_SESSION['reg_temp'])) {
        die("Session expired. <a href='register.html'>Start Over</a>");
    }

    $email = $_SESSION['reg_temp']['email'];
    $user = $_SESSION['reg_temp']['user'];
    $pass = $_SESSION['reg_temp']['pass'];

    // Verify
    $stmt = $pdo->prepare("SELECT * FROM verification_codes WHERE email=? AND code=? AND type='REGISTER' AND expires_at > NOW()");
    $stmt->execute([$email, $code]);

    if ($stmt->rowCount() > 0) {
        // Create User
        $hash = password_hash($pass, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO users (username, email, password_hash, plan_type, api_requests_left) VALUES (?, ?, ?, 'FREE', 10)");
        $stmt->execute([$user, $email, $hash]);

        // Cleanup
        $pdo->prepare("DELETE FROM verification_codes WHERE email=?")->execute([$email]);
        session_destroy();
        
        $success = "Account created successfully! You can now Login.";
        $step = 3; // Done
    } else {
        $error = "Invalid or expired code.";
        $step = 2; // Stay on verify
    }
}
?>

<!DOCTYPE html>
<html>
<head><title>Verify Registration</title>
<style>
    body { font-family: 'Segoe UI', sans-serif; background: #f4f4f9; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
    .card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 100%; max-width: 400px; text-align:center; }
    input { width: 100%; padding: 12px; margin: 15px 0; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box; text-align: center; letter-spacing: 5px; font-size: 20px; }
    button { width: 100%; padding: 12px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; }
</style>
</head>
<body>
    <div class="card">
        <?php if ($step == 2): ?>
            <h2>Enter Verification Code</h2>
            <p>We sent a code to <?php echo htmlspecialchars($_SESSION['reg_temp']['email']); ?></p>
            <?php if ($error) echo "<p style='color:red'>$error</p>"; ?>
            <form method="POST">
                <input type="text" name="code" placeholder="123456" required maxlength="6">
                <button type="submit" name="action" value="verify_code">Verify & Create</button>
            </form>
        <?php elseif ($step == 3): ?>
            <h2 style="color:green">Success!</h2>
            <p><?php echo $success; ?></p>
            <a href="login.php" style="display:inline-block; margin-top:10px; padding:10px 20px; background:#007bff; color:white; text-decoration:none; border-radius:5px;">Go to Login</a>
        <?php endif; ?>
    </div>
</body>
</html>