<?php

$valid = true;

$lang = $_REQUEST["lang"];

if($_REQUEST["name"] != ""){
  $name = $_REQUEST["name"];
}
else{
  if($lang=="pl"){
    echo "Musisz podać imię.\n";
  }
  else{
    echo "Must type name.\n";
  }
  $valid = false;
}

if($_REQUEST["email"] != ""){
  $email = $_REQUEST["email"];
}
else{ 
  if($lang=="pl"){
    echo "Musisz podać adres email.\n";
  }
  else{
    echo "Must type email address.\n";
  }
  $valid = false;
}

if(isset($email) && sprawdz_mail($email) == -1) {
  if($lang=="pl"){
    echo "Niepoprawny adres email.\n";
  }
  else{
    echo "Wrong email address.\n";
  }
  $valid = false;
}

if($_REQUEST["content"] != ""){
  $content = $_REQUEST["content"];
}
else{
  if($lang=="pl"){
    echo "Musisz wpisać wiadomość.";
  }
  else{
    echo "Must type message.";
  }
  $valid = false;
}


if($valid){
  $subject = "Wiadomość od: ".$name." (".$email.")";
  $send_email = mail("sztefkokamil@gmail.com", $subject, $content);
  
  if ($send_email == false){
    if($lang=="pl"){
      echo "Wiadomość nie została wysłana - błąd serwera.\nSpróbuj ponownie za kilka minut.";
    }
    else{
      echo "Message has't been sent - server error.\nTry again in few minutes.";
    }
  }
  else{
    if($lang=="pl"){
      echo "Twoja wiadomość została wysłana.\nDziękujemy.";
    }
    else{
      echo "Message has been sent.\nThank you.";
    }
  }
}


function sprawdz_mail($mail) {

  $sprawdz = '/^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,4}$/';

  if(preg_match($sprawdz, $mail)){
    return 0;
  }
  else{
    return -1;
  }
}

?>