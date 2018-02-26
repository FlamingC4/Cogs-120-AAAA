var progress = require("../cAssignment.json");
var list = require("../data.json");

exports.view = function(req, res){
  //console.log(progress);
  res.render('progress-checker', progress);
  count["viewAlt"] = false;
};

exports.viewAlt = function(req, res){
  //console.log(progress);
  res.render('progress-checker', progress);
  count["viewAlt"] = true;
};

