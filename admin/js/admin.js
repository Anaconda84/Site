$(document).ready(function(){
// ---- Форма -----
  var options = { 
    // элемент, который будет обновлен по ответу сервера 
  	target: "#output",
    beforeSubmit: showRequest, // функция, вызываемая перед передачей 
    success: showResponse, // функция, вызываемая при получении ответа
    timeout: 3000 // тайм-аут
  };
  
  // привязываем событие submit к форме
  $('#myForm').submit(function() { 
    $(this).ajaxSubmit(options); 
    // !!! Важно !!! 
    // всегда возвращаем false, чтобы предупредить стандартные
    // действия браузера (переход на страницу form.php) 
    return false;
  });

  jQuery("#myForm").validationEngine(); 
// ---- Форма -----

});

// вызов перед передачей данных
function showRequest(formData, jqForm, options) { 
    // formData - массив; здесь используется $.param чтобы преобразовать его в строку для вывода в alert(),
    // (только в демонстрационных целях), но в самом плагине jQuery Form это совершается автоматически.
    var queryString = $.param(formData); 
    // jqForm это jQuery объект, содержащий элементы формы.
    // Для доступа к элементам формы используйте 
    // var formElement = jqForm[0]; 
    alert('Вот что мы передаем: \n\n' + queryString); 
    // здесь можно вернуть false чтобы запретить отправку формы; 
    // любое отличное от fals значение разрешит отправку формы.
    return true; 
} 
 
// вызов после получения ответа 
function showResponse(responseText, statusText)  { 
    // для обычного html ответа, первый аргумент - свойство responseText
    // объекта XMLHttpRequest
 
    // если применяется метод ajaxSubmit (или ajaxForm) с использованием опции dataType 
    // установленной в 'xml', первый аргумент - свойство responseXML
    // объекта XMLHttpRequest
 
    // если применяется метод ajaxSubmit (или ajaxForm) с использованием опции dataType
    // установленной в 'json', первый аргумент - объек json, возвращенный сервером.
 
    alert('Статус ответа сервера: ' + statusText + '\n\nТекст ответа сервера: \n' + responseText + 
        '\n\nЦелевой элемент div обновиться этим текстом.'); 
}

/**
*
* @param {jqObject} the field where the validation applies
* @param {Array[String]} validation rules for this field
* @param {int} rule index
* @param {Map} form options
* @return an error string if validation failed
*/
function checkHELLO(field, rules, i, options){
    if (field.val() != "HELLO") {
	// this allows to use i18 for the error msgs
	return options.allrules.validate2fields.alertText;
    }
}

function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

function check() {
    if(mp4_up && poster_up) {
	var xmlhttp = getXmlHttp();
	xmlhttp.open('POST', 'command.php?mp4='+mp4_up+'&poster='+poster_up+'&name='+$('input#name')[0].value, false);
	xmlhttp.send();
	if(xmlhttp.status == 200) {
//	    alert('response='+xmlhttp.responseText);
	    $('#output')[0].textContent = xmlhttp.responseText;
	    $('#tracker')[0].width = 800;
	    $('#tracker')[0].height = 200;
	}
	mp4_up = null;
	poster_up = null;
    }

}

