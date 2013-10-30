<?php

header('Content-type: image/jpeg');

$image = new Imagick('image.jpg');

// Если в качестве ширины или высоты передан 0,
// то сохраняется соотношение сторон
$image->thumbnailImage(100, 0);

echo $image;

?>