// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("exit")[0];

var projectName = document.getElementById("project-name");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	console.log("exiting");
    modal.style.display = "none";
};

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