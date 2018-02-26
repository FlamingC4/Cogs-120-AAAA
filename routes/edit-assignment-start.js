var count = require("../cAssignment.json"); // I added this


exports.view = function(req, res){
  res.render('edit-assignment-from-start');
  count["viewAlt"] = false;
};

exports.viewAlt = function(req, res){
  res.render('edit-assignment-from-start');
  count["viewAlt"] = true;
};

