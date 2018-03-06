var assignmentList = require("../data.json");
var curr = require("../cAssignment.json"); //added this

exports.view = function(req, res){
  res.render('home-page', assignmentList);
  //res.render('home-page', curr);
};

exports.viewAlt = function(req, res){
	console.log("home page viewAlt");
  	res.render('home-page', assignmentList);
  	//res.render('home-page', curr);
};