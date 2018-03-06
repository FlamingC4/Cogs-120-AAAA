'use strict';
var enterAssignmentName = new Audio('/enterAssignmentName.mp3');
console.log(enterAssignmentName);
$('#myBtn').onClick = function() {	
	console.log("good");	
	enterAssignmentName.play();	
};