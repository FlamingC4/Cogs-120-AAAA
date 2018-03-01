'use strict'
var currData = require("../cAssignment.json");
var toWrite = require("../data.json");

exports.view = function(req, res){
    var projectName = req.body.name;  
    console.log(projectName);  
    //console.log(currData);
    
    //Set the variable for if the value is an alt first!
    //currData["viewAlt"] = false;
    currData.name = projectName; 

    res.render('enter-name-page', currData);    
};

exports.viewAlt = function(req, res){
    var projectName = req.body.name;  
    console.log(projectName);  
    //console.log(currData);

    //Set the variable for if the value is an alt first!
    //currData["viewAlt"] = true;
    
    //TODO: Test this because I have no idea if the alt works
    currData.name = projectName; 

    res.render('enter-name-page', currData);    
};
