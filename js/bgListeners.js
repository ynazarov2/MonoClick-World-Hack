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
        if(params[0]=='expires_in') params[1] = ''+(parseInt(params[1]) + curtime());
        localStorage[params[0]] = params[1];

        alert(localStorage['access_token']);
      }
    }
  }
)