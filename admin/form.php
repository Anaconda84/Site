<?php
header('Content-Type: text/html; charset=utf-8');
if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
    $time = date("H:i:s d/m/Y", time());

//    $fp = fopen("/tmp/counter.txt", "a");
//    fwrite($fp, var_dump($_POST));
//    fclose($fp);


    // Создадим новую базу данных 
    $db = new SQLite3('../VideoSite/videobaza.db');
    // Запишем что-нибудь в таблицу 
    $j1='';
    if(isset($_POST['janr'][0])) { $j1=$_POST['janr'][0]; }
    $j2='';
    if(isset($_POST['janr'][1])) { $j2=$_POST['janr'][1]; }
    $j3='';
    if(isset($_POST['janr'][2])) { $j3=$_POST['janr'][2]; }
    $j4='';
    if(isset($_POST['janr'][3])) { $j4=$_POST['janr'][3]; }
    $j5='';
    if(isset($_POST['janr'][4])) { $j5=$_POST['janr'][4]; }

    list($base, $ext) = split('\.', $_POST['mp4']);
    $mp4 = $_POST['translit'].'/'.$_POST['translit'].'.'.$ext;
    list($base, $ext) = split('\.', $_POST['poster']);
    $poster = $_POST['translit'].'/'.$_POST['translit'].'.'.$ext;


    $str = "INSERT INTO VideoApp_videobaza (name, description, year, register, actors, duration, rating, publication_date, janr, janr2, janr3, janr4, janr5, poster, url) VALUES ('".$_POST['name']."', '".$_POST['about']."', '".$_POST['years']."', '".$_POST['register']."', '".$_POST['actors']."', '".$_POST['hour'].':'.$_POST['min']."', '".$_POST['rating']."', '".$time."', '".$j1."', '".$j2."', '".$j3."', '".$j4."', '".$j4."', '".$poster."', '".$mp4."');";
    $res = $db->exec($str);
    if($res == 1)
    {
	print 'Сервер отвечает: '.$time.' передача данных прошла успешно!';
    }
    else
    {
	print 'Сервер отвечает: '.$time.' Ошибка!!!: '.$db->lastErrorMsg();
    }
}
?>
