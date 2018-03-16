var progress = require("../cAssignment.json");
var list = require("../data.json");

exports.view = function(req, res){
  //console.log(progress);
  //list["viewAlt"] = false;
  console.log("normal get request");

  res.render('progress-checker', progress);
  //var percentCompleted= req.body.name; 
  //list["viewAlt"] = false;
};

exports.viewResume = function(req, res) {
    console.log("resuming assignment");
    
    var name = req.params.name;
    progress.currAssignment.splice(0, 1);
    
    //Arbitrarily large number
    var copyIndex = 9999;
    var assignmentList = list.inProgressAssignments;

    for(var i = 0; i < assignmentList.length; i++) {
        if(assignmentList[i].name === name) {
            copyIndex = i;
        }
    }

    console.log(copyIndex);
    console.log(name);
    
    var newEntry = {
        "name": name,
        "estimated_time" : assignmentList[copyIndex].estimated_time,
        "actual_time" : " "
    }
 
    progress.name = name;
    progress.currAssignment.push(newEntry);

    console.log(progress.currAssignment);
    assignmentList.splice(copyIndex, 1);

    res.render('progress-checker', progress);
}

exports.viewAlt = function(req, res){
  console.log("progress checker alt");
  //list["viewAlt"] = true;
  res.render('progress-checker', progress);
  //list["viewAlt"] = true;
};

