if ($("#monoclick").length == 0){
	$('<iframe />', {
	    name: 'monoclick',
	    id:   'monoclick',
	    src: chrome.extension.getURL('inject/adv_post.html'),
	    style: 'height:150px;width:700px;position:fixed;display:none;left:0px;top:0px;border:0px;z-index:2147483647;'
	}).appendTo('body');

	$('<div />', {
	    name: 'monoclickDiv',
	    id:   'monoclickDiv',
	    style: 'height:150px;width:700px;position:fixed;display:none;left:0px;top:0px;border:0px;z-index:2147483647;'
	}).appendTo('body');
	$('#monoclickDiv').html('<div style="width:684px;height:55px;margin-left:9px;margin-top:9px;background-color:rgba(0,144,255,0.2);text-align:center;">'+
						 '</div>')


	var iframe = $('#monoclick');
	var upload_div = $('#monoclickDiv');
	var iframe_select = null;
	var iframe_music = null;
	
	SetPosition(iframe);
	SetPosition(upload_div);
	if(typeof(fast) !== 'undefined')  $(iframe).show();
	else $(iframe).show(500);

	$(window).resize(defPosition);
}

function getDomain(thestring){
  if(thestring){
    var urlpattern = new RegExp("(http|ftp|https)?:?//(.*?)/.*$");
    var parsedurl = thestring.match(urlpattern);
    if(parsedurl)
      return parsedurl[2]
    else
      return null;
  } else return null;
}

function getDomainHttp(thestring){
  if (thestring){
  var urlpattern = new RegExp("(http|ftp|https)?:?//(.*?)/.*$");
  var parsedurl = thestring.match(urlpattern);
  if(parsedurl)
    return parsedurl[1]+"://"+parsedurl[2];
  else
    return null;
  } else return null;
}

function makefullpath(thestring){
  res = '';
  if (thestring.substr(0,2)=='//') thestring = 'http:' + thestring;
  
  if(getDomain(thestring)==null){
     if (thestring.substr(0,1)=='/'){
        res = rtrim(getDomainHttp(''+window.location),'/')+"/"+ltrim(thestring,'/');
     }else{ 
        res = rtrim(getPath(window.location),'/')+"/"+ltrim(thestring,'/');
     }
  }
  else res = thestring;
  return res;
}

function trim(str, chars){ 
  return ltrim(rtrim(str, chars), chars); 
}

function ltrim(str, chars){ 
  if(str){
    chars = chars || "\\s"; 
    str = str.replace(new RegExp("^[" + chars + "]+", "g"), ""); 
  };
  return str;
}

function rtrim(str, chars){ 
  if(str){
    chars = chars || "\\s"; 
    str = str.replace(new RegExp("[" + chars + "]+$", "g"), ""); 
  };
  return str;
}

function SetPosition(elem){
	var window_height = $(window).height();
	var window_width = $(window).width();
	$(elem).css('top',window_height - (elem.height())  + 'px')
	$(elem).css('left',(window_width/2 - (elem.width()/2)) +'px')
}

function getPath(thestring){
  var path=''+thestring;
  if(path.indexOf("?")!=-1)  path = path.substring(0,path.indexOf("?")+1);
  path = path.substring(0,path.lastIndexOf("/")+1);
  return path;
}


function defPosition(){
    SetPosition(iframe);
    if(iframe_select)
      SetPosition_select(iframe_select);
    if(iframe_music)
      SetPosition_music(iframe_music);
    SetPosition(upload_div);
}