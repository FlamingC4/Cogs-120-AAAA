var count = require("../cAssignment.json");

exports.view = function(req, res) {
  res.render('start-countdown',count);
};
