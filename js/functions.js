function UplImg(url, name, fn, data, type, params) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, false);
  var boundary = 'ohaiimaboundary';
  xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);

  var PostData = new Array();
  if(params)
  for(i=0;i<params.length;i++){
  	PostData.push('--'+boundary);
  	PostData.push('Content-Disposition: form-data; name="'+params[i].name+'"');
  	PostData.push('');
  	PostData.push(utf8_encode(params[i].value.toString()));
  }

  PostData = PostData.concat([
    '--' + boundary,
    'Content-Disposition: form-data; name="' + name + '"; filename="' + fn + '"',
    'Content-Type: ' + type,
    '',
    atob(data),
    '--' + boundary + '--'
  ]);
 

  PostData = PostData.join('\r\n');
  xhr.sendAsBinary(PostData);

  if(xhr.status == 200) {
  	localStorage.lastRes = xhr.responseText;
  	return $.parseJSON(xhr.responseText);
  }else 
  	return "error";
}


function utf8_encode(str_data) {
    str_data = str_data.replace(/\r\n/g,"\n");
    var utftext = "";
    for (var n = 0; n < str_data.length; n++) {
        var c = str_data.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }
    }
    return utftext;
}

function getBase64Image(img){
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var iWidth = parseInt(canvas.width);
    var iHeight = parseInt(canvas.height);
    var dataURL = canvas.toDataURL('image/png');
    return dataURL;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}

function notify(){
  var notification = webkitNotifications.createHTMLNotification(chrome.extension.getURL('popup/notification.html'));
  notification.show();
}

function curtime(){
  return Math.round((new Date()).getTime() / 1000);
}


XMLHttpRequest.prototype.sendAsBinary = function(string) {
  var bytes = Array.prototype.map.call(string, function(c) {
    return c.charCodeAt(0) & 0xff;
  });
  this.send(new Uint8Array(bytes).buffer);
};