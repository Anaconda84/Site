<?php 
//$fp = fopen("/tmp/counter.txt", "a");

//fwrite($fp, getcwd());

//fclose($fp);
  // Создадим новую базу данных 
// try { 
//  $db = new SQLite3('../VideoSite/videobaza.db');
  // Запишем что-нибудь в таблицу 
//  $res = $db->exec("INSERT INTO VideoApp_videobaza (name, description, year, register, actors, duration, rating, publication_date, janr, poster, url) VALUES ('aaaaa', 'bbb', '1968', 'ccc', 'ddd', '1:30', '5', '10/09/2013', 'eee', '1111111', '22222222222');");
// }
// catch(Exception $e) {
//  print 'res='+$e->getMessage();
// }

$time = date("H:i:s d/m/Y", time());
$str = "INSERT INTO VideoApp_videobaza (name, description, year, register, actors, duration, rating, publication_date, janr, poster, url) VALUES ('abcd', 'aaa', 'bbb', 'ccc', 'ddd', '1:30', '5', '".$time."', 'eee', '1111111', '22222222222');";

print $str;
?>
