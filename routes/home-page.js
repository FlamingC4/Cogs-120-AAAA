var assignmentList = require("../data.json");

exports.view = function(req, res){
  res.render('home-page', assignmentList);
};

exports.viewAlt = function(req, res){
	console.log("home page viewAlt");
  	res.render('home-page', assignmentList);
};