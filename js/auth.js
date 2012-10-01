function FBO(){
	this.accessToken = '';
	this.appId = '281975628584589';
	this.privacy = 'user_photos,offline_access,photo_upload,publish_stream'; 
	this.redirectUrl = 'https://www.facebook.com/connect/login_success.html';
}


FBO.prototype.Login = function(){
	var login_url = 'https://www.facebook.com/dialog/oauth?client_id='+this.appId+'&scope='+this.privacy+'&redirect_uri='+this.redirectUrl+'&response_type=token';
	window.open(login_url, 'fb_login', "location=1,status=1,scrollbars=1,width=640,height=480");
};


FB = new FBO();
FB.Login();