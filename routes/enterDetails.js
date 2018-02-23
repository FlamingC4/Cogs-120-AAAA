'use strict'
var currData = require("../cAssignment.json");

exports.view = function(req, res){
    var project = req.params.projectName;    
    //console.log(currData);
    res.render('enter-name-page', {
        "name": project});
};
