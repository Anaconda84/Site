  var ip;
  var torrent_file;
  var distr_download = 'http://duroscope.ru:8000/SwarmVideo_0.9.exe';
  var intervalID;

  function init(url, torrent)
  {
    BrowserDetect.init();
    var browser = BrowserDetect.browser;
    var version = BrowserDetect.version;
    var num_ver = parseFloat(version);
    var os = BrowserDetect.OS;
    
    //alert('Cookie='+document.cookie);
    myCookie = getCookie("req");
    //alert('cooke='+myCookie);
    //alert('url='+url+'   torrent='+torrent);
    torrent_file = torrent;
    //alert('browser='+browser+'   version='+version);

//    if( supports_webm_video() )
    if( browser != 'Safari' )
    {
      if(os == 'Windows' && (browser == 'Chrome' || (browser == 'Firefox' && num_ver >= 6) ) && myCookie == null)
      {
        setTimeout('wait();',1);
        //alert('WEBSOCKET!!!');
        var conn = new SockJS('http://localhost:6868/websocket');
        var err = true;

        function sendRequest()
        {
          err = false;
          conn.send('VERSION');
        };

        conn.onopen = function() 
        {
          //close_wait();
          //alert('onopen');
          sendRequest();
        };

        conn.onmessage = function(e) 
        {
          if(chk_version(e.data) == 'YES')
	  {
	    //alert('New version!!!');
	    new_version();
	  }
	  else
	  {
	    window.location.href = 'http://localhost:6878/get_video?url='+url+'&torrent='+torrent;
	  }
	  close_wait();
        };

        conn.onclose = function() {
          //alert('onclose');
          if(err == true)
          {
            close_wait();
            //alert('Error !!!');
  	    error();
          }

        };


        conn.onerror = function() {
          //alert('Error !!!');
        };
      }
      else
      {
        next(browser);
      }
    }
    else
    {
      document.location.href = "/notsupport";
    }
  }

  function error()
  {
    var parent = document.getElementsByTagName('BODY')[0];
    var par = document.createElement('parent_popup');
    par.id = 'parent_popup';
    var pop = document.createElement('popup');
    pop.id = 'popup';
    var par_r = parent.appendChild(par);
    var pop_r = par_r.appendChild(pop);

    var msg = '<table id="msg" border=\"2\">'; 
    msg = msg + '<tr><td align=\"center\" valign=\"center\"><h3>Друзья !<br> Мы очень рады, что Вы решили посмотреть видео на нашем сайте.<br>'; 
    msg = msg + 'Для более быстрого и надежного просмотра видео, мы рекоммендуем Вам установить ';
    msg = msg + '<i><b>торрент клиента</b></i>. Для установки торрент клиента нажмите кнопку <i><ins><b>Установить</b></ins></i>. ';
    msg = msg + 'Через торрент клиент Ваш браузер сможет подключаться к торрент ';
    msg = msg + 'видео сети. <font color="#F00"><b>Мы настоятельно рекомендуем Вам сделать это</b></font>.<br> Или же Вы можете просто ';
    msg = msg + 'смотреть потоковое видео с сервера. Тогда нажмите кнопку <i><ins><b>Отмена</b></ins></i>.</h3></td></tr>';
    msg = msg + '<tr><td align=\"center\" valign=\"center\"><input type=\"button\" name=\"install\" value=\" Установить торрент клиент\" onclick=\"install()\;\">';
    msg = msg + '<input type=\"button\" name=\"continue\" value=\" Отмена \" onclick=\"next()\;\"> </td></tr>';
    msg = msg + '</table>';
    pop_r.innerHTML = msg;
    
  }

  function new_version()
  {
    var parent = document.getElementsByTagName('BODY')[0];
    var par = document.createElement('parent_popup');
    par.id = 'parent_popup';
    var pop = document.createElement('popup');
    pop.id = 'popup';
    var par_r = parent.appendChild(par);
    var pop_r = par_r.appendChild(pop);

    var msg = '<table id="msg" border=\"2\">'; 
    msg = msg + '<tr><td align=\"center\" valign=\"center\"><h3>Хотите загрузить новую версию торрент клиента?<br></h3></td></tr>'; 
    msg = msg + '<tr><td align=\"center\" valign=\"center\"><input type=\"button\" name=\"install\" value=\" Установить торрент клиент\" onclick=\"install()\;\">';
    msg = msg + '<input type=\"button\" name=\"continue\" value=\" Отмена \" onclick=\"next1()\;\"> </td></tr>';
    msg = msg + '</table>';
    pop_r.innerHTML = msg;
    
  }

  function wait()
  {
    var parent = document.getElementsByTagName('BODY')[0];
    var par = document.createElement('parent_popup');
    par.id = 'parent_popup';
    var pop = document.createElement('popup');
    pop.id = 'popup';
    var par_r = parent.appendChild(par);
    var pop_r = par_r.appendChild(pop);

    var msg = '<img id=\"wait\" src=\"/static/images/wait.gif\">';
    pop_r.innerHTML = msg;
  }

  function close_wait()
  {
    if(document.getElementById('parent_popup') != null) { document.getElementById('parent_popup').style.display='none'; }
  }
  
  function install() {
     document.getElementById('parent_popup').style.display='none';
     document.location.href = distr_download;
     setTimeout('document.location.href = ""',5000);
  }

  function next(browser) {
     var t = torrent_file.split("/");
     var webm_fullname = t[t.length-1].split(".")[0]+'.webm';
     var webm_name = t[t.length-1].split(".")[0];
     //alert('webm='+webm_name);
     var sss = get_seeders(webm_name);
     ip = sss.split(",");
     //alert('ip='+ip[0]);
     
     setCookie("req", "answer", 1); // 60 min cookie
     //alert('Set Cookie !!!!');
     
     if(document.getElementById('parent_popup') != null) { document.getElementById('parent_popup').style.display='none'; }
     document.location.href = '/static/player.html?ip='+sss+'&webm='+webm_fullname+'&browser='+browser;
     //window.open('/static/player.html?ip='+sss+'&webm='+webm_name, "Player");
  }

  function next1() {
     if(document.getElementById('parent_popup') != null) { document.getElementById('parent_popup').style.display='none'; }
     document.location.href = ""
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

  function chk_version(swarm_version) {

      var req = getXmlHttp();
      var str = '/version';
      req.open('GET', str, false);
      req.send(null);
      if(req.status == 200) {
	  //alert('swarm_version=' + swarm_version);
	  //alert('Am server = ' + req.responseText);

	  if(parseFloat(swarm_version) != parseFloat(req.responseText) )
	  {
	    return 'YES';
	  }
	  else
	  {
	    return 'NO';
	  }
      }
  }

  function get_seeders(torrent) {
      var req = getXmlHttp();
      var str = '/seeders/'+torrent;
      req.open('GET', str, false);
      req.send(null);
      if(req.status == 200) {
          return req.responseText;
      }
  }


  function get_url(url) {
      var req = getXmlHttp();
      var str = '/static/'+url;
      req.open('GET', str, false);
      req.send(null);
      if(req.status == 200) {
          return req.responseText;
      }
  }

  function getParam(sParamName){
    var Params = location.search.substring(1).split("&");
    var variable = "";
    for (var i = 0; i < Params.length; i++){
        if (Params[i].split("=")[0] == sParamName){
            if (Params[i].split("=").length > 1) variable = Params[i].split("=")[1];
            return variable;
        }
    }
    return "";
  }

  function setCookie (name, value, expires, path, domain, secure) {
      //alert(expires*1000 * 60);
      var today = new Date();
      today.setTime( today.getTime() );
      var expires_date = new Date( today.getTime() + (expires*1000 * 60) );

      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires_date.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
  }

  function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
        //alert(setStr);
	return(setStr);
  }

  function supports_video() {
     return !!document.createElement('video').canPlayType;
  }
              
  function supports_webm_video() {
     if (!supports_video()) { return false; }
     var v = document.createElement("video");
     return v.canPlayType('video/webm; codecs="vp8, vorbis"');
  }

