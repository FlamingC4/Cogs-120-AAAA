var count = require("../cAssignment.json"); // I added this


exports.view = function(req, res){
  if(count["viewAlt"] != false) {
    count["viewAlt"] = false;
  }
  res.render('edit-assignment', count);
};

exports.viewAlt = function(req, res){
  if(count["viewAlt"] != true) {
    count["viewAlt"] = true;
  }
  res.render('edit-assignment', count);
};

