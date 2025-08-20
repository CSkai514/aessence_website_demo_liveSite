<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Honeypot check: If filled, treat as bot
    if (!empty($_POST['website'])) {
        die("Bot detected. Submission blocked.");
    }

    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $branch = htmlspecialchars($_POST['branch']);

    $to = "aessenceclinic88@gmail.com"; 
    $subject = "New Contact Form Submission from Aessence Website";

    $body = "You have received a new message:\r\n\r\n";
    $body .= "Name: $name\r\n";
    $body .= "Phone: $phone\r\n";
    $body .= "Email: $email\r\n";
    $body .= "Branch: $branch\r\n";
    $body .= "Message:\r\n$message\r\n";

    $headers = "From: aessencecom@aessence.com.my\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent";
    } else {
        echo "Oops! Something went wrong, please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
