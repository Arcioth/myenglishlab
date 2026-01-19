<?php
// html/mail_config.php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

function sendEmail($to, $subject, $body) {
    global $pdo; // Uses connection from db_connect.php included in the parent script

    // --- CONFIGURATION ---
    $smtpHost = 'smtp.gmail.com';
    $smtpUser = 'your_gmail_address@gmail.com';  // CHANGE THIS
    $smtpPass = 'your_app_password';             // CHANGE THIS (16 chars)
    $fromEmail = 'noreply@myenglishlab.blog';
    $fromName = 'Pearson Solver';
    // ---------------------

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = $smtpHost;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtpUser;
        $mail->Password   = $smtpPass;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom($fromEmail, $fromName);
        $mail->addAddress($to);
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();

        // Log Success to DB
        if (isset($pdo)) {
            $stmt = $pdo->prepare("INSERT INTO outgoing_emails (recipient, subject, body, status) VALUES (?, ?, ?, 'SENT')");
            $stmt->execute([$to, $subject, $body]);
        }
        return true;

    } catch (Exception $e) {
        // Log Error to DB
        if (isset($pdo)) {
            $errInfo = $mail->ErrorInfo;
            $stmt = $pdo->prepare("INSERT INTO outgoing_emails (recipient, subject, body, status) VALUES (?, ?, ?, ?)");
            $stmt->execute([$to, $subject, $errInfo, 'ERROR']);
        }
        return false;
    }
}
?>