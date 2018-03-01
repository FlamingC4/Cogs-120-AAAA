var list = require("../data.json");

exports.view = function(req, res) {
    if(list["viewAlt"] != false) {
	    list["viewAlt"] = false;
    }
	res.render('login', list);
};

exports.viewAlt = function(req, res) {
    if(list["viewAlt"] != true) {
	    list["viewAlt"] = true;
    }
	res.render('login', list);
};
