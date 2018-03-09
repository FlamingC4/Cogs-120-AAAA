'use strict';

$(document).ready(function() {
	initializePage();
 });


function initializePage() {
	console.log("working");

};

var enterAssignmentName = new Audio('/enterAssignmentName.mp3');


console.log(enterAssignmentName);
$('#myBtn').onClick = function() {	
	console.log("good");	
	enterAssignmentName.play();	
};

var item = $(".thisAssignment");

$(item).click(function(e) {
	var myId = $(this).find(".prevAssignment").text();
	var thisId = "#" + myId;
	console.log(thisId);
	var final = $(thisId);
	$(final).toggleClass("hiddenInfo");
	//var thisId = document.getElementById();
	//console.log(thisId);
	//$(thisId).toggleClass(".hiddenInfo");

		//var name = $(this).text();
		//console.log(name);
});