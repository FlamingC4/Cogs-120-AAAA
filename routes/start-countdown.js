var count = require("../cAssignment.json");

exports.view = function(req, res){
  var attributes = req.body.detail;
  console.log(attributes);
  res.render('start-countdown', count);
};
