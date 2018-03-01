var count = require("../cAssignment.json");

exports.view = function(req, res) {
  count["viewAlt"] = false;
  res.render('start-countdown',count);
};

exports.viewAlt = function(req, res) {
  count["viewAlt"] = true;
  res.render('start-countdown',count);
};

