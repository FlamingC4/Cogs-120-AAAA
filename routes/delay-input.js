var Data = require("../cAssignment.json");

exports.view = function(req, res){
  //console.log(currData);
  res.render('delay-input', Data);
};

exports.viewAlt = function(req, res){
  //console.log(currData);
  console.log("delay input alt")
  res.render('delay-input', Data);
};