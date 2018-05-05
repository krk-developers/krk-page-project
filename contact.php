<?php

$valid = true;

if($_REQUEST["name"] != ""){
  $name = $_REQUEST["name"];
}
else{
  echo "Musisz podać imię.\n";
  $valid = false;
}

if($_REQUEST["email"] != ""){
  $email = $_REQUEST["email"];
}
else{ 
  echo "Musisz podać adres email.\n";
  $valid = false;
}

if(isset($email) && sprawdz_mail($email) == -1) {
  echo "Niepoprawny adres email.\n";
  $valid = false;
}

if($_REQUEST["content"] != ""){
  $content = $_REQUEST["content"];
}
else{
  echo "Musisz wpisać wiadomość.";
  $valid = false;
}


if($valid){
  $subject = "Wiadomość od: ".$name." (".$email.")";
  $send_email = mail("sztefkokamil@gmail.com", $subject, $content);
  
  if ($send_email == false){
    echo "Wiadomość nie została wysłana - błąd serwera.\nSpróbuj ponownie za kilka minut.";
  }
  else{
    echo "Twoja wiadomość została wysłana.\nDziękujemy.";
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