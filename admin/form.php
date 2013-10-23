<?php
header('Content-Type: text/html; charset=utf-8');
if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
    $time = date("H:i:s", time());
    print 'Сервер отвечает: '.$time.' передача данных прошла успешно!'.$_GET;
}
?>