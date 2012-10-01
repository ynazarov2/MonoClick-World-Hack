chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) { 
    if(request.load == "fbLoginResult"){
      sendResponse({load: "popupClose"});

      resStr = request.resStr.substring(1);
      pairs = resStr.split('&');
      for(i=0;i<pairs.length;i++){
        params = pairs[i].split('=');
        if(params[0]=='error'){
          alert('The auth is failed. Please try again.');
          localStorage.fbauth_logged = 0;
          break;
        }
        if(params[0]=='access_token') FB.accessToken = params[1];
        if(params[0]=='expires_in') params[1] = ''+(parseInt(params[1]) + curtime());
        localStorage[params[0]] = params[1];
      }
    }else
    if(request.load == "sendPhoto"){
    	FB.UploadImage(localStorage.postImage,localStorage.text);
    	removePopup();
    }

    if(request.load == 'removePopup'){
    	removePopup();
    }
  }
)