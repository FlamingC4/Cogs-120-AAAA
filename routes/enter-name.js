//FILE SHOULD CURRENTLY BE UNUSED, USING OTHER JAVASCRIPT FUNCTION IN PUBLIC
var a_Data = require("../cAssignment.json");
//var popup = require("../public/js/name-popup.js");

exports.enter = function(req, res) {
    //var assignment = popup.createNew();
    var currAssignment = {
        "name" : Assignment,
    };
    
    if(assignment) {
        a_Data.current = currAssignment;
        window.location.assign("/enterDetails");
    }
}

/*
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
        
    }

    var currAssignment = {
        "name" : Assignment,
    };

    a_Data.current = currAssignment;

    window.location.assign("/enterDetails");
}*/
