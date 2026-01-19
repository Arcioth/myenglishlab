<?php
require 'db_connect.php';

// Only show count to be safe, or list masked keys
$stmt = $pdo->query("SELECT type, COUNT(*) as count FROM api_keys GROUP BY type");
$stats = $stmt->fetchAll();

echo "<h1>API Key Status</h1>";
foreach ($stats as $row) {
    echo "Type: " . $row['type'] . " - Count: " . $row['count'] . "<br>";
}

echo "<hr>";

// List masked keys
$stmt = $pdo->query("SELECT id, type, is_active, LEFT(key_value, 8) as start FROM api_keys");
while ($row = $stmt->fetch()) {
    echo "ID: " . $row['id'] . " | Type: " . $row['type'] . " | Active: " . $row['is_active'] . " | Key: " . $row['start'] . "...<br>";
}
?>
