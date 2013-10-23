<?php
// Define a destination
$targetFolder = '/var/www/Duroskop/uploads'; // Relative to the root

$mp4 = 'video.mp4';
$name = 'koskos';

$sourcePath = $targetFolder;
$targetPath = $targetFolder .'/'. $name;

if (!file_exists($targetPath)) {
  mkdir($targetPath);
}
if (file_exists($targetPath.'/'.$mp4)) {
  unlink($targetPath.'/'.$mp4);
}

list($base, $ext) = split('\.', $mp4);
print $base.', '.$ext."\n";
print $sourcePath.'/'.$mp4.', '.$targetPath.'/'.$name.'.'.$ext."\n";
rename($sourcePath.'/'.$mp4, $targetPath.'/'.$name.'.'.$ext);

print 'Film: '.$name.' added.';
?>

