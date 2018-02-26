var count = require("../cAssignment.json");

exports.view = function(req, res) {
  res.render('start-countdown',count);
  count["viewAlt"] = false;
};

exports.viewAlt = function(req, res) {
  res.render('start-countdown',count);
  count["viewAlt"] = true;
};

