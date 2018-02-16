
/*
 * GET home page.
 */
var assignmentList = require("../data.json");

exports.view = function(req, res){
  res.render('home-page', assignmentList);
};


