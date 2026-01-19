<?php
session_start();
require 'db_connect.php';

// --- CONFIGURATION ---
// CHANGE THIS PASSWORD IMMEDIATELY!
$ADMIN_PASSWORD = '131331'; 
// ---------------------

// Handle Logout
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: admin.php");
    exit;
}

// Handle Login
if (isset($_POST['login'])) {
    if ($_POST['password'] === $ADMIN_PASSWORD) {
        $_SESSION['is_admin'] = true;
        header("Location: admin.php");
        exit;
    } else {
        $error = "Incorrect Password";
    }
}

// Require Login for everything else
if (!isset($_SESSION['is_admin']) || !$_SESSION['is_admin']) {
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <title>Admin Login</title>
        <style>
            body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f4f4f9; }
            form { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            input { padding: 10px; border: 1px solid #ddd; width: 200px; display: block; margin-bottom: 10px; }
            button { background: #007bff; color: white; border: none; padding: 10px; width: 100%; cursor: pointer; }
            button:hover { background: #0056b3; }
            .error { color: red; margin-bottom: 10px; font-size: 14px; }
        </style>
    </head>
    <body>
        <form method="POST">
            <h3 style="margin-top:0;">Admin Login</h3>
            <?php if (isset($error)) echo "<div class='error'>$error</div>"; ?>
            <input type="password" name="password" placeholder="Admin Password" required>
            <button type="submit" name="login">Login</button>
        </form>
    </body>
    </html>
    <?php
    exit;
}

// --- ACTION HANDLERS ---

$message = "";

// 1. Add User (UPDATED WITH EMAIL)
if (isset($_POST['add_user'])) {
    $username = trim($_POST['username']);
    $email    = trim($_POST['email']); // Captured Email
    $password = trim($_POST['password']);
    $credits = (int)$_POST['credits'];
    $plan = $_POST['plan'];

    if ($username && $password && $email) {
        $hash = password_hash($password, PASSWORD_DEFAULT);
        try {
            $stmt = $pdo->prepare("INSERT INTO users (username, email, password_hash, plan_type, api_requests_left) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$username, $email, $hash, $plan, $credits]);
            $message = "User '$username' added successfully!";
        } catch (PDOException $e) {
            $message = "Error: " . $e->getMessage();
        }
    } else {
        $message = "Error: Username, Email, and Password are required.";
    }
}

// 2. Update Credits
if (isset($_POST['update_credits'])) {
    $id = (int)$_POST['user_id'];
    $credits = (int)$_POST['credits'];
    $stmt = $pdo->prepare("UPDATE users SET api_requests_left = ? WHERE id = ?");
    $stmt->execute([$credits, $id]);
    $message = "Credits updated.";
}

// 3. Delete User
if (isset($_POST['delete_user'])) {
    $id = (int)$_POST['user_id'];
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
    $stmt->execute([$id]);
    $message = "User deleted.";
}

// 4. Add API Key
if (isset($_POST['add_key'])) {
    $key = trim($_POST['key_value']);
    $type = $_POST['key_type'];
    if ($key) {
        try {
            $stmt = $pdo->prepare("INSERT INTO api_keys (key_value, type) VALUES (?, ?)");
            $stmt->execute([$key, $type]);
            $message = "API Key added.";
        } catch (PDOException $e) {
            $message = "Error: " . $e->getMessage();
        }
    }
}

// 5. Delete API Key
if (isset($_POST['delete_key'])) {
    $id = (int)$_POST['key_id'];
    $stmt = $pdo->prepare("DELETE FROM api_keys WHERE id = ?");
    $stmt->execute([$id]);
    $message = "API Key deleted.";
}

// --- DATA FETCHING ---
$users = $pdo->query("SELECT * FROM users ORDER BY id DESC")->fetchAll();
$keys = $pdo->query("SELECT * FROM api_keys ORDER BY id DESC")->fetchAll();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solver Admin</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #f8f9fa; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 1000px; margin: 0 auto; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-bottom: 20px; }
        h2 { margin-top: 0; color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #eee; }
        th { background: #f8f9fa; color: #666; font-weight: 600; }
        input, select { padding: 8px; border: 1px solid #ddd; border-radius: 4px; margin-right: 5px; }
        button { padding: 8px 15px; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; }
        .btn-primary { background: #007bff; color: white; }
        .btn-primary:hover { background: #0056b3; }
        .btn-danger { background: #dc3545; color: white; }
        .btn-danger:hover { background: #a71d2a; }
        .btn-sm { padding: 5px 10px; font-size: 12px; }
        .badge { padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: bold; }
        .badge-free { background: #e9ecef; color: #495057; }
        .badge-flash { background: #d4edda; color: #155724; }
        .message { background: #d4edda; color: #155724; padding: 10px; border-radius: 4px; margin-bottom: 20px; }
        .logout { color: #dc3545; text-decoration: none; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛠 Solver Admin Panel</h1>
            <a href="?logout=1" class="logout">Logout</a>
        </div>

        <?php if ($message): ?>
            <div class="message"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>

        <!-- USERS SECTION -->
        <div class="card">
            <h2>Users</h2>
            
            <!-- Add User Form (UPDATED) -->
            <form method="POST" style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 20px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                <strong>Add User:</strong>
                <input type="text" name="username" placeholder="Username" required>
                <input type="email" name="email" placeholder="Email (Required)" required>
                <input type="text" name="password" placeholder="Password" required>
                <select name="plan">
                    <option value="FREE">FREE</option>
                    <option value="FLASH">FLASH (Paid)</option>
                </select>
                <input type="number" name="credits" value="10" style="width: 70px;" placeholder="Credits">
                <button type="submit" name="add_user" class="btn-primary">Create</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Plan</th>
                        <th>Credits</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($users as $u): ?>
                    <tr>
                        <td><?php echo $u['id']; ?></td>
                        <td><?php echo htmlspecialchars($u['username']); ?></td>
                        <td><?php echo htmlspecialchars($u['email'] ?? 'No Email'); ?></td>
                        <td><span class="badge badge-<?php echo strtolower($u['plan_type']); ?>"><?php echo $u['plan_type']; ?></span></td>
                        <td>
                            <form method="POST" style="display:inline-flex; align-items:center;">
                                <input type="hidden" name="user_id" value="<?php echo $u['id']; ?>">
                                <input type="number" name="credits" value="<?php echo $u['api_requests_left']; ?>" style="width:60px;">
                                <button type="submit" name="update_credits" class="btn-primary btn-sm" title="Save Credits">💾</button>
                            </form>
                        </td>
                        <td><?php echo date('M d, Y', strtotime($u['created_at'])); ?></td>
                        <td>
                            <form method="POST" onsubmit="return confirm('Delete user <?php echo htmlspecialchars($u['username']); ?>?');">
                                <input type="hidden" name="user_id" value="<?php echo $u['id']; ?>">
                                <button type="submit" name="delete_user" class="btn-danger btn-sm">Delete</button>
                            </form>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>

        <!-- API KEYS SECTION -->
        <div class="card">
            <h2>Gemini API Keys</h2>
            
            <form method="POST" style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 20px; display: flex; gap: 10px;">
                <input type="text" name="key_value" placeholder="Enter Google Gemini API Key" style="flex:1;" required>
                <select name="key_type">
                    <option value="FREE">FREE Pool</option>
                    <option value="PAID">PAID Pool</option>
                </select>
                <button type="submit" name="add_key" class="btn-primary">Add Key</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Key (Masked)</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($keys as $k): ?>
                    <tr>
                        <td><?php echo $k['id']; ?></td>
                        <td title="<?php echo htmlspecialchars($k['key_value']); ?>">
                            <?php echo substr($k['key_value'], 0, 8) . '...'; ?>
                        </td>
                        <td><span class="badge"><?php echo $k['type']; ?></span></td>
                        <td>
                            <form method="POST" onsubmit="return confirm('Delete this key?');">
                                <input type="hidden" name="key_id" value="<?php echo $k['id']; ?>">
                                <button type="submit" name="delete_key" class="btn-danger btn-sm">Delete</button>
                            </form>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>