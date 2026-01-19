<?php
// Run this directly in browser: https://myenglishlab.blog/api/debug_solve.php
require 'db_connect.php';

echo "<h1>Debug Solve Logic</h1>";

// 1. Simulate User (Replace 'your_username' with the actual username)
$username = 'admin';
echo "Looking for user: $username<br>";

$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$username]);
$user = $stmt->fetch();

if (!$user) {
    die("User not found!");
}

echo "User Plan: " . $user['plan_type'] . "<br>";
echo "Requests Left: " . $user['api_requests_left'] . "<br>";

// 2. Determine Key Type Logic (Copied from solve.php)
$keyType = ($user['plan_type'] === 'FLASH') ? 'PAID' : 'FREE';
echo "Required Key Type: $keyType<br>";

// 3. Check Key Availability
$keyStmt = $pdo->prepare("SELECT id, type, is_active, LEFT(key_value, 5) as key_start FROM api_keys WHERE type = ? AND is_active = 1 LIMIT 1");
$keyStmt->execute([$keyType]);
$apiKeyRow = $keyStmt->fetch();

if ($apiKeyRow) {
    echo "<b style='color:green'>SUCCESS: Found Key!</b><br>";
    echo "Key ID: " . $apiKeyRow['id'] . "<br>";
    echo "Key Starts With: " . $apiKeyRow['key_start'] . "...<br>";
} else {
    echo "<b style='color:red'>FAIL: No active key found for type '$keyType'.</b><br>";
    
    // Check if ANY keys exist for this type
    $countStmt = $pdo->prepare("SELECT COUNT(*) FROM api_keys WHERE type = ?");
    $countStmt->execute([$keyType]);
    $count = $countStmt->fetchColumn();
    echo "Total active/inactive keys of type '$keyType' in DB: $count<br>";
}

// 4. Fallback Logic Check
if (!$apiKeyRow && $keyType === 'PAID') {
    echo "Attempting Fallback to FREE...<br>";
    $keyStmt->execute(['FREE']);
    $apiKeyRow = $keyStmt->fetch();
    if ($apiKeyRow) {
        echo "<b style='color:orange'>SUCCESS (Fallback): Found FREE Key!</b><br>";
    } else {
        echo "<b style='color:red'>FAIL: No FREE keys either.</b>";
    }
}
?>
