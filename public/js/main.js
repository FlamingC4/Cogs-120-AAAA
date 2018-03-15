// Get the modal
var modal = document.getElementById("myModal");
//var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
//var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("exit")[0];
//var span2 = document.getElementsByClassName("exit")[1];

var projectName = document.getElementById("project-name");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
};

/*btn2.onclick = function() {
    modal2.style.display = "block";
}; */

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	console.log("exiting");
    modal.style.display = "none";
};

/*span2.onclick = function() {
	console.log("exiting");
    modal2.style.display = "none";
}; */

function validate() {
	if(projectName.value == 0) {
		$('.addProject').addClass('wrong');
		$('.addProject').text("Please Enter a Assignment Name");
		return false;
	} 

	return true;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
}