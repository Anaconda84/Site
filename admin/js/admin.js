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
//    var queryString = $.param(formData); 
    // jqForm это jQuery объект, содержащий элементы формы.
    // Для доступа к элементам формы используйте 
    // var formElement = jqForm[0]; 
//    alert('Вот что мы передаем: \n\n' + queryString); 
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
//    alert('Статус ответа сервера: ' + statusText + '\n\nТекст ответа сервера: \n' + responseText + 
//        '\n\nЦелевой элемент div обновиться этим текстом.'); 
    $('form#myForm')[0].reset();
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
    if($('input#name')[0].value) {
	$('#mp4_upload').uploadify('disable', false);
	$('#poster_upload').uploadify('disable', false);
    }
    if(mp4_up && poster_up && $('input#name')[0].value) {
	var trans_lit = transliterate($('input#name')[0].value);
	$('label#url')[0].textContent = 'http://duroskop.net:6878/'+trans_lit+'/'+trans_lit+'.'+mp4_up.split('.')[1];
	var xmlhttp = getXmlHttp();
	$('input#translit')[0].value = transliterate($('input#name')[0].value);
	xmlhttp.open('POST', 'command.php?mp4='+mp4_up+'&poster='+poster_up+'&name='+transliterate($('input#name')[0].value), false);
	xmlhttp.send();
	if(xmlhttp.status == 200) {
//	    alert('response='+xmlhttp.responseText);
	    $('#output')[0].textContent = xmlhttp.responseText;
//	    $('#tracker')[0].width = 800;
//	    $('#tracker')[0].height = 200;
            $('input#submit1')[0].disabled = false;
	}
	mp4_up = null;
	poster_up = null;
    }

}


function transliterate(word) {

    var answer = "";

    A = new Array();
    A["Ё"]="YO";A["Й"]="I";A["Ц"]="TS";A["У"]="U";A["К"]="K";A["Е"]="E";A["Н"]="N";A["Г"]="G";A["Ш"]="SH";A["Щ"]="SCH";A["З"]="Z";A["Х"]="H";A["Ъ"]="";
    A["ё"]="yo";A["й"]="i";A["ц"]="ts";A["у"]="u";A["к"]="k";A["е"]="e";A["н"]="n";A["г"]="g";A["ш"]="sh";A["щ"]="sch";A["з"]="z";A["х"]="h";A["ъ"]="";
    A["Ф"]="F";A["Ы"]="I";A["В"]="V";A["А"]="A";A["П"]="P";A["Р"]="R";A["О"]="O";A["Л"]="L";A["Д"]="D";A["Ж"]="ZH";A["Э"]="E";
    A["ф"]="f";A["ы"]="i";A["в"]="v";A["а"]="a";A["п"]="p";A["р"]="r";A["о"]="o";A["л"]="l";A["д"]="d";A["ж"]="zh";A["э"]="e";
    A["Я"]="YA";A["Ч"]="CH";A["С"]="S";A["М"]="M";A["И"]="I";A["Т"]="T";A["Ь"]="";A["Б"]="B";A["Ю"]="YU";
    A["я"]="ya";A["ч"]="ch";A["с"]="s";A["м"]="m";A["и"]="i";A["т"]="t";A["ь"]="";A["б"]="b";A["ю"]="yu";
    A["\`"]="";A["~"]="";A["!"]="";A["@"]="";A["#"]="";A["$"]="";A["%"]="";A["^"]="";
    A["&"]="";A["*"]="";A["("]="";A[")"]="";A["+"]="";A["="]="";A["\["]="";
    A["\]"]="";A["\{"]="";A["\}"]="";A["\\"]="";A["\|"]="";A["\:"]="";
    A["\;"]="";A["\""]="";A["\'"]="";A["\,"]="";A["\."]="";A["\/"]="";
    A["\<"]="";A["\>"]="";A["\?"]="";A[" "]="_";

    for (i in word) {

      if (A[word[i]] === undefined) {
        answer += word[i];
      }
      else {
        answer += A[word[i]];
      }
    }
    return answer;
}
