var notification = $.parseJSON(localStorage.notification);
$(document).ready(function(){
	setTimeout(window.close,5000);
	$('#titleb').text(notification.title);
	$('#description').html(notification.description);
	$('#link').attr('href',notification.href);
	$('#icon').attr('src',notification.img);
});