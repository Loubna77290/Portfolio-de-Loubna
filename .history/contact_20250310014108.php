<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fiche contact</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>  
    <section class="contact-background">
        <div class="contact-contenu">
        <h1>FICHE CONTACT Loubna</h1>  
        <p>Voici ma page de contact !</p>
        <?php
        $to = "loubnamelakia@gmail.com";
        $subject = "essai";
        $message = "coucou Loubna";
        $headers = "from: no-reply@mon-site.com";
        
        if(mail($to, $subject, $message, $headers)) {
            echo "Email envoyé avec succès.";
         } else {
            echo "Erreur lors de l'envoi de l'email.";
        }
    ?>
    
    </div>
    </section>
    
</body>
</html>