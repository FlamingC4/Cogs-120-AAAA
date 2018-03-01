var list = require("../data.json");

exports.view = function(req, res) {
	list["viewAlt"] = false;
	res.render('login', list);
};

exports.viewAlt = function(req, res) {
	list["viewAlt"] = true;
	res.render('login', list);
};
