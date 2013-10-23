<?php
header('Content-Type: text/html; charset=utf-8');
// Define a destination
$targetFolder = '/uploads'; // Relative to the root

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

rename($sourcePath.'/'.$mp4, $targetPath.'/'.$mp4);
rename($sourcePath.'/'.$poster, $targetPath.'/'.$poster);

print 'Film: '.$name.' added.';
?>

