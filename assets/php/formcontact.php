<?php

if (isset($_POST['email']) && !empty($_POST['email'])){

$name = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$phone = addslashes($_POST['phone']);
$message = addslashes($_POST['message']);

$to = "robertferrer@outlook.com";
$subject = "Contact - Ferrer Systems";
$body = "Name: ".$name. "\r\n".
        "Email: ".$email. "\r\n".
        "Phone: ".$phone. "\r\n".
        "Message: ".$message;
$header = "suport@ferrersystems.com"."\r\n"
        ."Reply-To:".$email."\r\n"
        ."X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){

    echo("Email successfully sent!");

}else{

    echo("The email cannot be sent!");

}



}

?>