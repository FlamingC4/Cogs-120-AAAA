var Data = require("../cAssignment.json");

exports.view = function(req, res){
  //console.log(currData);
  res.render('delay-input', Data);
};