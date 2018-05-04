<?php

$valid = true;

if(isset($_REQUEST["name"])){
  $name = $_REQUEST["name"];
}
else{
  echo "Musisz podać imię<br>";
  $valid = false;
}

if(isset($_REQUEST["email"])){
  $email = $_REQUEST["email"];
}
else{ 
  echo "Musisz podać adres email.<br>";
  $valid = false;
}

if(isset($email) && sprawdz_mail($email) == -1) {
  echo "Niepoprawny adres email.<br>";
  $valid = false;
}

if(isset($_REQUEST["content"])){
  $content = $_REQUEST["content"];
}
else{
  echo "Musisz wpisać wiadomość.";
  $valid = false;
}


if($valid){
  $header = "Wiadomość od: " . $email;
  $send_email = mail("sztefkokamil@gmail.com", "pytanie", $content);
  
  if ($send_email == false){
    echo "Błąd wysłania wiadomości";
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