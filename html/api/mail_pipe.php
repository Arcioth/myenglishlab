#!/usr/bin/php -q
<?php
// html/mail_pipe.php
// This script runs automatically whenever an email arrives for info@myenglishlab.blog

// Adjust this path if your db_connect.php is elsewhere
require_once __DIR__ . '/db_connect.php'; 

// Read the email from Standard Input (Stdin)
$fd = fopen("php://stdin", "r");
$rawEmail = "";
while (!feof($fd)) {
    $rawEmail .= fread($fd, 1024);
}
fclose($fd);

// Parse Basic Details
// 1. Subject
preg_match("/^Subject: (.*)/m", $rawEmail, $matches);
$subject = isset($matches[1]) ? trim($matches[1]) : "(No Subject)";

// 2. Sender (From)
preg_match("/^From: (.*)/m", $rawEmail, $matches);
$senderHeader = isset($matches[1]) ? trim($matches[1]) : "Unknown";
$sender = $senderHeader;
// Extract just the email address <email@example.com>
if (preg_match("/<([^>]+)>/", $senderHeader, $emailMatch)) {
    $sender = $emailMatch[1];
}

// 3. Body Extraction (Simple text parsing)
// Emails are complex (multipart/MIME). This is a basic parser for text emails.
$body = "";
$parts = explode("\r\n\r\n", $rawEmail, 2);
if (isset($parts[1])) {
    $body = $parts[1];
    // If it's a multipart message, clean up boundary lines (simplified)
    if (strpos($body, "Content-Type: multipart") !== false) {
        $body = "Complex Multipart Email - View Raw Source in DB";
    }
}

// Save to Database
try {
    // Check if $pdo exists from db_connect, if not, try to reconnect
    if (!isset($pdo)) {
        require __DIR__ . '/db_connect.php';
    }
    
    $stmt = $pdo->prepare("INSERT INTO incoming_emails (sender, subject, body) VALUES (?, ?, ?)");
    $stmt->execute([$sender, $subject, $body]);
} catch (Exception $e) {
    // Fail silently to avoid bouncing the email back to sender with a PHP error
    // error_log($e->getMessage());
}
?>