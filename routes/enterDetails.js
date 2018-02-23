'use strict'
var currData = require("../cAssignment.json");

exports.view = function(req, res){
    var projectName = req.body.name;  
    console.log(projectName);  
    //console.log(currData);
    res.render('enter-name-page', {
        "name": projectName
    });
    
    var currAssignment = {
        "name" : projectName
    };

<<<<<<< HEAD
    //currData.
=======
    currData.name = projectName; 
>>>>>>> 739fc53875452d9c13da3a312d35089da49bfb41
};
