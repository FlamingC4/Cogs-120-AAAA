'use strict';

//THIS ISN'T WORKING BECAUSE REQUIRE MIGHT ONLY WORK ON ROUTES, RECHECK
var a_Data = require("../cAssignment.json");

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

    var currAssignment = {
        "name" : Assignment,
    };

    a_Data.current = currAssignment;
}
