// Call this function when page loads
$(document).ready(function() {
    initializePage();
});

function initializePage() {
    console.log("Javascript started");
    $("#add-link").click(createNew);
}

function createNew(e){
    e.preventDefault();
    var assignment = prompt("Assignment Name: ","");
    
    console.log("Add button clicked");
    //Add error checking later when we have more complicated popups
    /*
    if(assignment == null || assignmnet == "") {
        
    }*/

    window.location.assign("/enterDetails");
}
