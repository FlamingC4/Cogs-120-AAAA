var count = require("../cAssignment.json"); // I added this


exports.view = function(req, res){
  count["viewAlt"] = false;
  res.render('edit-assignment', count);
};

exports.viewAlt = function(req, res){
  count["viewAlt"] = true;
  res.render('edit-assignment', count);
};

