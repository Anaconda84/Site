<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ru" xml:lang="ru">
<head>
<title>Администрирование сайта.</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta name="robots" content="noindex" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.form.js"></script>
<script src="js/languages/jquery.validationEngine-ru.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.validationEngine.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.uploadify.min.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="css/uploadify.css">
<link rel="stylesheet" type="text/css" href="css/admin.css">
<link rel="stylesheet" href="css/validationEngine.jquery.css" type="text/css"/>

</head>
<body>
<!-- css и javascript-коды специально размещены непосредственно на странице. -->

<div id="output">AJAX-ответ от сервера заменит этот текст.</div>
<br />
<form id="myForm" action="form.php" method="post">
<!-- ############################################################## -->
<label for="name">Название фильма:</label>
<input name="name" value="" type="text" class="validate[required] text-input" id="name" onBlur="check();" /><br />
<!-- ############################################################## -->
<label for="about">Описание фильма:</label>
<textarea name="about" rows="2" cols="20" class="validate[required] text-input" ></textarea><br />
<!-- ############################################################## -->
<label for="register">Режиссер:</label>
<textarea name="register" rows="2" cols="20" class="validate[required] text-input" ></textarea><br />
<!-- ############################################################## -->
<label for="actors">Актеры:</label>
<textarea name="actors" rows="2" cols="20" class="validate[required] text-input" ></textarea><br />
<!-- ############################################################## -->
<label for="janr">Жанр:</label>
<select name="janr[]" id="janr" multiple="multiple" class="validate[required] text-input" >
  <option value="Авторское кино">Авторское кино</option>
  <option value="Аниме">Аниме</option>
  <option value="Артхаус">Артхаус</option>
  <option value="Биографические">Биографические</option>
  <option value="Боевики">Боевики</option>
  <option value="Военные">Военные</option>
  <option value="Детективы">Детективы</option>
  <option value="Детские">Детские</option>
  <option value="Документальные">Документальные</option>
  <option value="Драмы">Драмы</option>
  <option value="Исторические">Исторические</option>
  <option value="Комедии">Комедии</option>
  <option value="Концерты">Концерты</option>
  <option value="Короткометражные">Короткометражные</option>
  <option value="Криминальные">Криминальные</option>
  <option value="Мелодрамы">Мелодрамы</option>
  <option value="Мистика">Мистика</option>
  <option value="Музыкальные">Музыкальные</option>
  <option value="Мультфильмы">Мультфильмы</option>
  <option value="Мюзиклы">Мюзиклы</option>
  <option value="Отечественные">Отечественные</option>
  <option value="Приключения">Приключения</option>
  <option value="Семейные">Семейные</option>
  <option value="Сериалы">Сериалы</option>
  <option value="Спорт">Спорт</option>
  <option value="ТВ-передачи">ТВ-передачи</option>
  <option value="Триллеры">Триллеры</option>
  <option value="Ужасы">Ужасы</option>
  <option value="Фантастика">Фантастика</option>
  <option value="Фентези">Фентези</option>
  <option value="Эротика">Эротика</option>
</select><br />
<!-- ############################################################## -->
<label for="years">Год выхода:</label>
<input value="гггг" name="years" id="years" type="text" maxlength="4" class="validate[required,custom[integer],min[1900]] text-input" onclick="this.value=''"/><br />
<!-- ############################################################## -->
<label for="hour">Длительность:</label>
<select name="hour" id="hour" class="validate[required] text-input" >
  <option value="0">0</option>
  <option value="1" selected="selected">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select><label id="time">час.</label>
<input name="min" id="min" type="text" maxlength="2" class="validate[required] text-input"  /><label id="time">мин.</label><br />
<!-- ############################################################## -->
<label for="rating">Рэйтинг:</label>
<select name="rating" id="rating" class="validate[required] text-input" >
  <option value="1">*</option>
  <option value="2">* *</option>
  <option value="3">* * *</option>
  <option value="4">* * * *</option>
  <option value="5" selected="selected">* * * * *</option>
</select>
<br />
<input type="hidden" name="translit" id="translit" value="" />
<input type="hidden" name="mp4" id="mp4" value="" />
<input type="hidden" name="poster" id="poster" value="" />
<label name="url" id="url"></label>
<br />

<input id="submit1" type="submit" name="submitButton" value="Добавить" disabled />
</form>

<br />

<hr>

<h1>&nbsp;&nbsp;&nbsp;&nbsp;Загрузка файлов</h1>
<form>
    Загрузка MP4 файла:
    <div id="queue"></div>
    <input id="mp4_upload" name="file_upload_mp4" type="file" multiple="true">
</form>

<form>
    Загрузка постера:
    <div id="queue"></div>
    <input id="poster_upload" name="file_upload_poster" type="file" multiple="true">
</form>

<hr>
<br />
<input id="next" type="button" value="Дальше -->" onclick="window.location = 'http://duroskop.net:8888/room/new?url='+$('label#url')[0].innerText;">
<!--
<iframe id="tracker" src="http://duroskop.net:8888/room/new" width="0" height="0" >
    Ваш браузер не поддерживает плавающие фреймы!
</iframe>
-->

<script src="js/admin.js" type="text/javascript" charset="utf-8"></script>


<script type="text/javascript">
    <?php $timestamp = time();?>
    var mp4_up = false;
    var poster_up = false;
    $(function() {
	$('#mp4_upload').uploadify({
	    'formData'     : {
		'timestamp' : '<?php echo $timestamp;?>',
		'token'     : '<?php echo md5('unique_salt' . $timestamp);?>',
	    },
	    'fileTypeExts' : '*.gif; *.jpg; *.png; *.mp4',
	    'fileSizeLimit' : '10GB',
	    'swf'      : 'uploadify.swf',
	    'uploader' : 'uploadify.php',
	    'disable'  : 'true',
	    'onUploadSuccess' : function(file, data, response) {
		$('#mp4_upload').uploadify('settings','buttonText','Loaded');
        	mp4_up = file.name;
		$('input#mp4')[0].value = file.name;
		check();
    	    },
    	    'onSWFReady' : function() {
		$('#mp4_upload').uploadify('disable', true);
    	    }
	});
    });
    $(function() {
	$('#poster_upload').uploadify({
	    'formData'     : {
		'timestamp' : '<?php echo $timestamp;?>',
		'token'     : '<?php echo md5('unique_salt' . $timestamp);?>'
	    },
	    'fileTypeExts' : '*.gif; *.jpg; *.png; *.mp4',
	    'fileSizeLimit' : '10GB',
	    'swf'      : 'uploadify.swf',
	    'uploader' : 'uploadify.php',
	    'onUploadSuccess' : function(file, data, response) {
		$('#poster_upload').uploadify('settings','buttonText','Loaded');
        	poster_up = file.name;
		$('input#poster')[0].value = file.name;
		check();
    	    },
    	    'onSWFReady' : function() {
		$('#poster_upload').uploadify('disable', true);
    	    }
	});
    });

</script>


</body>
</html>