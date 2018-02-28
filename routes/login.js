var list = require("../data.json");

exports.view = function(req, res) {
	res.render('login');
	list["viewAlt"] = false;
};

exports.viewAlt = function(req, res) {
	res.render('login');
	list["viewAlt"] = true;
};