var progress = require("../cAssignment.json");

exports.view = function(req, res){
  res.render('progress-checker', progress);
};
