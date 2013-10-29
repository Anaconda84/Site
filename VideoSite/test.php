<?php 
  // Создадим новую базу данных 
  $db = new SQLite3('videobaza.db');
  // Запишем что-нибудь в таблицу 
  $db->exec("INSERT INTO VideoApp_videobaza (name, description, year, register, actors, duration, rating, publication_date, janr, poster, url) VALUES ('aaa', 'bbb', '1968', 'ccc', 'ddd', '1:30', '5', '10/09/2013', 'eee', '1111111', '22222222222');");
?>
