<?php
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];

    if ($email === ''){
    echo "Email cannot be empty.";
    die();
    } else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo "Email format invalid.";
    die();
    }
    }
    if ($message === ''){
    echo "Message cannot be empty.";
    die();
    }
$content="From: \n Email: $email \n Message: $message";
$recipient = "youremail@here.com";
$mailheader = "From: $email \r\n";
mail($recipient, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>