'use strict'
var currData = require("../cAssignment.json");

exports.view = function(req, res){
    var name = req.body.name;  
    console.log(name);  
    //console.log(currData);
    res.render('enter-name-page', {
        "name": name});
};
