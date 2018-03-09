$(document).ready(function() {

 });


function loginValidate(userName, password) {
	var email = $("#email");
	var password = $("#password");
	var result = true;

	if(email.val().length == 0) {
		email.attr('placeholder', 'Please enter any email');
		email.css('background', 'yellow');
		email.addClass('placeholderred');
		result = false;
	}
	if(password.val().length == 0) {
		password.attr('placeholder', 'Please enter any password');
		password.css('background', 'yellow');
		password.addClass('placeholderred');
		result = false;
	} 

	return result;
}