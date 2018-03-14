var count = require("../cAssignment.json");
var record = require("../data.json");

exports.view = function(req, res){
  var attributes = req.body.detail;
  console.log(attributes);
  console.log("This is the dropdown menu version");

  count.details = attributes;
  //count["viewAlt"] = false;
  
  res.render('start-countdown', count);
  
  var newEntry = {
     "name": count.name,
     "estimated_time" : count.details.Estimate + " hours",
     "actual_time" : " "
  }
  count.currAssignment.push(newEntry);
};

exports.viewAlt = function(req, res){
  var attributes = req.body.detail;
  console.log(attributes);

  count.details = attributes;
  //count["viewAlt"] = true;

  res.render('start-countdown', count);
  
  var newEntry = {
     "name": count.name,
     "estimated_time" : count.details.EstimateHH + ":" + count.details.EstimateMM + " hours",
     "actual_time" : " ",
  }
  count.currAssignment.push(newEntry);
};

