'use strict';
$(document).ready(function() {
	console.log("hi")
});

$('#myBtn').onClick = function() {	
	console.log("good");
	var enterAssignmentName = new Audio('/enterAssignmentName.mp3');
	enterAssignmentName.play();	
};