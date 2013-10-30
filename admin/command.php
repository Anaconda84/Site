<?php
header('Content-Type: text/html; charset=utf-8');
// Define a destination
$targetFolder = '/films'; // Relative to the root

$mp4 = $_GET['mp4'];
$poster = $_GET['poster'];
$name = $_GET['name'];

$sourcePath = $_SERVER['DOCUMENT_ROOT'] . $targetFolder;
$targetPath = $_SERVER['DOCUMENT_ROOT'] . $targetFolder .'/'. $name;

if (!file_exists($targetPath)) {
  mkdir($targetPath);
}
if (file_exists($targetPath.'/'.$mp4)) {
  unlink($targetPath.'/'.$mp4);
}
if (file_exists($targetPath.'/'.$poster)) {
  unlink($targetPath.'/'.$poster);
}


list($base, $ext) = split('\.', $mp4);
rename($sourcePath.'/'.$mp4, $targetPath.'/'.$name.'.'.$ext);
list($base, $ext) = split('\.', $poster);
rename($sourcePath.'/'.$poster, $targetPath.'/'.$name.'.'.$ext);

print 'Film: '.$name.' uploaded to server.';
?>

