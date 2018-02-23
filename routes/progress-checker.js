var progress = require("../cAssignment.json");
var list = require("../data.json");

exports.view = function(req, res){
  console.log(progress);
  res.render('progress-checker', progress);

  var newEntry = progress.name;
  var newEntry = {
    "name": progress.name,
    "estimated_time" : progress.details.Estimate + " hours",
    "actual_time" : " "
  }

  list.project.push(newEntry);
};
