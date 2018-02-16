'use strict'
var currData = require("../cAssigment.json");

exports.view = function(req, res){
  res.render('enter-name-page', currData);
};
