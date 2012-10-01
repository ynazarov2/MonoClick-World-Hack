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

FBO.prototype.UploadImage = function(url,message,id){
	var img = new Image();
	img.onload = function(){
		image_post = getBase64Image(img);
		try{
			localStorage.last_image = image_post;
		}catch(e){
			localStorage.removeItem('last_image');
			console.log('Warning: Image is bigger than localStorage Quota.')
		}

		//removing headers
		user = $.parseJSON(localStorage.fbauth_user);
		console.log(id);
		if ((!id)||(user.uid == id)){
			post = 'me';
		} else post='other';

		upload_url = 'https://graph.facebook.com/me/photos';
		image_post = image_post.replace("data:image/png;base64,", '');

		var params = new Array();
		params.push({name:'access_token',value:FB.accessToken});
		params.push({name:'message',value:message});


		if(post == 'other') params.push({name:'no_story',value:'1'});

		result = UplImg(upload_url,'source','image.png',image_post,'image/png',params);

		if(post == 'other'){
			//error check here!
			user = $.parseJSON(localStorage.fbauth_user);
			var Params = new Object();
			Params.method = 'feed';
			Params.id = ''+id;
			Params.async = false;
			Params.parameters = {message:message,object_attachment:result.id};
			//Facade.FB.Post(Params);
		}else{
	        localStorage.notification = '{"title":"Post sent",'+
	        '"description":"Image sent to your wall",'+
	        '"href":"http://facebook.com",'+
	        '"img":"'+url+'"}';
	        notify();
		}
	}

	img.src = url;
}

FBO.prototype.uploadWallPhoto = function(){
	return function(info, tab){
		FB.UploadImage(info.srcUrl,'');
	}
}

FBO.prototype.uploadExtended = function(){
	return function(info, tab){
		localStorage.postImage = info.srcUrl;
		insertPost();
	}
}

FB = new FBO();
FB.Login();