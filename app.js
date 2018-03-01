
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var login = require('./routes/login');
var home = require('./routes/home-page');
var enterDetails = require('./routes/enterDetails');
var startCountdown = require('./routes/start-countdown');
var startAgain = require('./routes/start-again');
var progressChecker = require('./routes/progress-checker');
var editAssignStart = require('./routes/edit-assignment-start');
var editAssign = require('./routes/edit-assignment');
var userSettings = require('./routes/edit-user-settings');
//var delayInput = require('./routes/delay-input'); NOT WORKING


//ALT ROUTES
//var indexAlt = require('./routes/index');
var loginAlt = require('./routes/login');
//var homeAlt = require('./routes/home-pageAlt');
var enterDetailsAlt = require('./routes/enterDetails');
var startCountdownAlt = require('./routes/start-countdown');
var progressCheckerAlt = require('./routes/progress-checker');
var editAssignStartAlt = require('./routes/edit-assignment-start');
var editAssignAlt = require('./routes/edit-assignment'); 
//var userSettingsAlt = require('./routes/edit-user-settings');

//var editAssignment = requre('./routes/edit-assignment');
// Example route
// var user = require('./routes/user');

var app = express();
var bodyParser = require("body-parser");

// all environments
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/home-page', home.view);
//app.get('/enter-name', enterName.enter); DOESN'T WORK

app.get('/enterDetails', enterDetails.view);
app.get('/start-countdown', startAgain.view);
app.get('/progress-checker', progressChecker.view);
app.get('/edit-assignment-from-start', editAssignStart.view);
app.get('/edit-assignment', editAssign.view);
app.get('/user-settings', userSettings.view);
//app.get('/delay-input', delayInput.view); NOT WORKING
app.post('/enterDetails', enterDetails.view);
app.post('/start-countdown', startCountdown.view);
//app.get('/edit-assignment', editAssignment.view);
// Example route
// app.get('/users', user.list);

//ALT ROUTES
app.get('/enterDetailsAlt', enterDetails.viewAlt);
app.get('/start-countdownAlt', startAgain.viewAlt);
app.get('/progress-checkerAlt', progressChecker.viewAlt);
app.get('/edit-assignment-from-startAlt', editAssignStart.viewAlt);
app.get('/edit-assignmentAlt', editAssign.viewAlt)
app.get('/Alt', login.viewAlt);
app.post('/start-countdownAlt', startCountdown.viewAlt);
app.get('/enterDetails/page_B', enterDetails.viewAlt);
app.get('/start-countdown/page_B', startAgain.viewAlt);
app.get('/progress-checker/page_B', progressChecker.viewAlt);
app.get('/edit-assignment-from-start/page_B', editAssignStart.viewAlt);
app.get('/page_B', login.viewAlt);
app.post('/start-countdown/page_B', startCountdown.viewAlt);
//app.get('/edit-assignment', editAssign.view);
//app.get('/user-settings', userSettings.view);
//app.post('/enterDetails', enterDetails.view);
//app.post('/start-countdown', startCountdown.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
