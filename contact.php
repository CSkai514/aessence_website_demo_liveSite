<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $branch = htmlspecialchars($_POST['branch']);

    $to = "chongshaokai1999@gmail.com";
    $subject = "New Contact Form Submission from Website";

    $body = "You have received a new message:\n\n";
    $body .= "Name: $name\n";
    $body .= "Phone: $phone\n";
    $body .= "Email: $email\n";
    $body .= "Branch: $branch\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $success = mail($to, $subject, $body, $headers);
    $result = $success ? 'success' : 'error';
    $messageText = $success ? 'Your message has been sent successfully!' : 'Oops! Something went wrong, please try again.';
} else {
    $result = 'error';
    $messageText = 'Invalid request method.';
}
?>
