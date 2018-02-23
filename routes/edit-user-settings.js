'use strict'
var currData = require("../cAssignment.json");

exports.view = function(req, res){
  //console.log(currData);
  res.render('user-settings', currData);
};
