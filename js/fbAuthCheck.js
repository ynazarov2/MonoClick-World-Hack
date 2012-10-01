chrome.extension.sendRequest({load: "fbLoginResult", resStr: location.hash},function (response){
		if(response.load == 'popupClose'){
			ww = window.open(window.location, '_self');
			ww.close();
		}
	}
)