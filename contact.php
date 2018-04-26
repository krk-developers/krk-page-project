<?php

if (sprawdz_mail($_POST["email"]) == -1) {
  
  print ("<span class=blad>Email jest nie prawidłowy</span><br>");
  
}
if ($_POST["name"] == "") {
print ("<span class=blad>Musisz wpisać imię</span><br>");
}
if ($_POST["content"] == "") {
print ("<span class=blad>Musisz wpisać treść</span><br>");
}
else {
  $bool = mail($_POST["email"],$_POST["content"],$_POST["name"]);
  if ($bool == false and sprawdz_mail($_POST["email"]) == 0) print "<span class=blad>Coś poszło nie tak serwer mail jest chyba przeciażony</span><br>";
  else header("location: ./index.html");
}





function sprawdz_mail($mail) {

// przypisanie adresu e-mail do zmiennej
//$email = $_POST['email'];

// formuła prawidłowego adresu e-mail 
$sprawdz = '/^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,4}$/';

if(preg_match($sprawdz, $mail))
  return 0;
else
  return -1;


}

?>