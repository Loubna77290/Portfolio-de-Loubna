<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = htmlspecialchars($_POST["firstname"]);
    $lastname = htmlspecialchars($_POST["lastname"]);
    $email = htmlspecialchars($_POST["email"]);
    $mobile = htmlspecialchars($_POST["mobile"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "loubnamelakia@gmail.com";
    $subject = "Nouveau message du formulaire de contact";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Nom: $firstname $lastname\n";
    $body .= "Email: $email\n";
    $body .= "Mobile: $mobile\n\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Votre message a été envoyé avec succès !";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>
