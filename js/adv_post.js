$(document).ready(function(){
	$('#image').attr('src',localStorage.postImage);

	$('#sendButton').click(function(){
		localStorage.text = $('#fb_input').val();

		chrome.extension.sendRequest({load: "sendPhoto"});
	})

	$('#closeLink').click(function(){
		chrome.extension.sendRequest({load: "removePopup"});
	})
})