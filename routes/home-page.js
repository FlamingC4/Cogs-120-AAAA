var assignmentList = require("../data.json");
var curr = require("../cAssignment.json"); //added this

exports.view = function(req, res){
  res.render('home-page', assignmentList);
  //res.render('home-page', curr);
};

exports.progressView = function(req, res) {
  var restartInfo = req.body.resInfo;

  var newInProgress = {
    "name": curr.name,
    "restart_date": restartInfo.resDate,
    "restart_time": restartInfo.resTime,
    "estimated_time" : curr.currAssignment[0].estimated_time,
    "percent_completed" : "30"
  };

  assignmentList.inProgressAssignments.push(newInProgress);
  console.log(newInProgress);

  res.render('home-page', assignmentList);
}

exports.viewAlt = function(req, res){
	console.log("home page viewAlt");
  	res.render('home-page', assignmentList);
  	//res.render('home-page', curr);
};
