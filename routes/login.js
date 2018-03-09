var past = require("../data.json");
var list = require("../cAssignment.json");

exports.view = function(req, res) {
	list["viewAlt"] = true;
	res.render('login', list);
};

exports.viewAlt = function(req, res) {
	list["viewAlt"] = false;
	res.render('login', list);
	console.log("You are in Alt mode");
};
