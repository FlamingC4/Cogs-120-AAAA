var progress = require("../cAssignment.json");
var list = require("../data.json");

exports.view = function(req, res){
  //console.log(progress);
  //list["viewAlt"] = false;
  res.render('progress-checker', progress);
  //var percentCompleted= req.body.name; 
  //list["viewAlt"] = false;
};

exports.viewAlt = function(req, res){
  console.log("progress checker alt");
  //list["viewAlt"] = true;
  res.render('progress-checker', progress);
  //list["viewAlt"] = true;
};

