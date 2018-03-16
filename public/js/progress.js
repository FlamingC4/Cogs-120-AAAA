'use strict';
//var data = require('../data.json');

//var requirejs = require('requirejs');

//var json = require('data.json');
//var jsonfile = require('jsonfile');

$(document).ready(function() {
    initWizardBox();
    moveBootStrap();
    getTimer();
    startTimer();
    checkpointTimer();
});

function initWizardBox() {
    $(".show-wizard").click(toggleDevWizard); 
}

function toggleDevWizard(e) {
    e.preventDefault();
    console.log("You found the dev options!");

    $(".dev-options").fadeToggle();
}

//from enter-due-date

function setDueDate(){
    var dueDate = $("#dueDateInput").val();
    var dueTime = $("#dueTimeInput").val();
    checkDate();

    if (dueDate){

    }
    //console.log(dueDate);
    //console.log(dueTime);
}


//initialize the BootStrap timer
function moveBootStrap() {    
    $(".progress-bar-success").animate({
        width: "70%"
    },2500);
    $(".progress-bar-warning").animate({
        width: "20%"
    },2500);
    $(".progress-bar-danger").animate({
        width: "10%"
    },2500);
    //console.log("Hello");
}

function resetProgress() {    
    $(".progress-bar-success").animate({
        width: "70%"
    },0);
    $(".progress-bar-warning").animate({
        width: "20%"
    },0);
    $(".progress-bar-danger").animate({
        width: "10%"
    },0);
}

function getTimer(){
    var dt = new Date();
    var dueTime = new Date();
   
    dueTime.setYear(2019);
    dueTime.setMonth(11); //November is 10
    dueTime.setDate(31);
    dueTime.setHours(23);
    dueTime.setMinutes(59);
    dueTime.setSeconds(59);
    //console.log(dueTime);

    var year = dt.getFullYear();  
    var month = dt.getMonth() + 1;  
    var day = dt.getDate();       
    var hour = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();
    
    var leftYear = dueTime.getFullYear();
    var leftMonth = dueTime.getMonth() + 1 - month;
    var leftDay = dueTime.getDate() - day;
    var leftHour = dueTime.getHours() - hour;
    var leftMinute = dueTime.getMinutes() - minute;
    var leftSecond = dueTime.getSeconds() - second;

    var dueDate = (leftYear + "/" + leftMonth + "/" + leftDay + " " + leftHour + ":" + leftMinute + ":" + leftSecond);

    /*$('#progress-timer').countdown(dueDate, function(event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));    
    });*/    
   // console.log(dueDate);

    return dueDate;
}

function setTimer(){
    /*var dueDate = new Date();

   // var dueDateString =  $('#DueDate').val();
    //console.log(dueDateString); //undefined
    //var dueTimeString =  $('#DueTime').val();
    //var dueDateArray = dueDateString.split('');
    //var dueTimeArray = dueTimeString.split('');

    dueDate.setYear(parseInt(dueDateArray[6] + dueDateArray[7] + dueDateArray[8] +dueDateArray[9]));
    dueDate.setMonth(parseInt(dueDateArray[0] + dueDateArray[1]));
    dueDate.setDate(parseInt(dueDateArray[2] + dueDateArray[3]));
    dueDate.setHours(parseInt(dueTimeString[0] + dueTimeString[1]));
    dueDate.setMinutes(parseInt(dueTimeString[2] + dueTimeString[3]));

    return dueDate;*/
}


//for when assignment is due
function startTimer(){
    var currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 5);
    //var dueDate = getTimer(2019, 11, 31, 23, 59, 59); //change this hard code
    var dueDate = currentDate;

   
    //console.log(dueDate);

    $('#progress-timer').countdown(dueDate, function(event) {
        $(this).html(event.strftime('%d days %H:%M:%S'));    
    });

    //console.log(toSeconds(dueDate));
    //return toSeconds(dueDate);   
    //console.log(toSeconds(dueDate));
}

//for checkpoint
function checkpointTimer(/*checkpoint interval goes here*/){
    var currentDate = new Date();
    
    //var checkPoint = getTimer(2019, 11, 31, 23, 59, 59); //change this hard code
    /*var checkPoint = getTimer(currentDate.getYear(), currentDate.getMonth(), currentDate.getDate(), 
        currentDate.getHours(),currentDate.getMinutes() +5,currentDate.getSeconds());*/
    currentDate.setMinutes(currentDate.getMinutes() + 3)
    //console.log(dueDate);
    var checkpoint = currentDate;

    $('#progress-timer-2').countdown(checkpoint, function(event) {
        $(this).html(event.strftime('%H:%M:%S'));    
    });

    //console.log(toSeconds(dueDate));
    //return toSeconds(dueDate);   
    //console.log(toSeconds(dueDate));
}

function toSeconds(dueDate){
    var currentDate = new Date();
    //console.log(currentDate);
    //var currentDueDate = getTimer(dueDate); //change this hard code var dueDate = getTimer(dueDate);
    var seconds = (Math.floor(dueDate.valueOf()/1000)) - (Math.floor(currentDate.valueOf()/1000));    
    return seconds; 
}


//countdown with the timer
function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};

function addToJson(name, estimated_time, actual_time){
    //json.writeFile('data.json', "name :" + name + " estimated_time :" + estimated_time + 
       // " actual_time :" + actual_time);

}

//checkpoint info
function checkPointInfo(){
    alert("Estimate how done you are in terms of percentage (ex: if you are done with 4/8 problems, you are approximately 50% complete)");
    
}

//now set the checkpoint
function setCheckPoint(){
    //console.log("hi");
    var checkpoint = $("#checkpointInterval").val();
    var cpBox = $("#checkpointPercent")[0];
    //var cpBox = document.getElementById("checkpointPercent");
    cpBox.innerHTML = "<p>Progress (% Completed): " + checkpoint + "</p>";
    //console.log("hello");
}


//setTimer (too pass in information from enter-name-page)
var coundownTillDue = setTimer();

//start the global timer
var dueTime = new Date();

//var dueYear = dueTime.setYear(2018);
var dueYear = dueTime.getYear();
var dueMonth = dueTime.getMonth();
var dueDay = dueTime.getDate();
var dueHours = dueTime.getHours();
var dueMinute = dueTime.setMinutes(dueTime.getMinutes() + 5);
var dueSecond = dueTime.getSeconds();

//console.log(toSeconds(dueTime));//sort of works

//placeholder time independent of everything
//progress(toSeconds(dueTime) , toSeconds(dueTime) /*change this hard coded variable*/, $('#progressBarz'));
progress(300, 300 /*change this hard coded variable*/, $('#progressBarz'));



//Close the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

//Button sound
var btn = document.getElementById("checkpoint0");
var btn2 = document.getElementById("1HourRemaining");

var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

var checkpointAudio = new Audio('/checkpoint.mp3');
var oneHourRemaining = new Audio('/1HourRemaining.mp3');


btn.onclick = function() {
        modal.style.display = "block";
        checkpointAudio.play();
    };

btn2.onclick = function() {    
        modal2.style.display = "block";
        oneHourRemaining.play();
    };



//next button on modal
span.onclick = function() {
    modal.style.display = "none";
};

span2.onclick = function() {
    modal2.style.display = "none";
}


//the alt modals
var pause = document.getElementById("pause-buttonAlt");
var finish = document.getElementById("finish-buttonAlt");

var pauseModal = document.getElementById('pauseModal');
var finishModal = document.getElementById('finishModal');


//alt modal audio
var pauseAudio = new Audio('/pauseScreenSound.mp3');
var finishAudio = new Audio('/finishConfirmationSound.mp3');


/*pause.onclick = function() {
    pauseModal.style.display = "block";
    pauseAudio.play();
}*/

finish.onclick = function() {       
    finishModal.style.display = "block";
    //finishAudio.play();
}


//close modals
//var closePause = document.getElementsByClassName("close")[2];
var closeFinish = document.getElementsByClassName("close")[3];

/*closePause.onclick = function() {
    pauseModal.style.display = "none";
}*/

closeFinish.onclick = function() {
    finishModal.style.display = "none";
}

//edit assignment sound
var editAssignment = $('#edit-assignment');
var editAssignmentSound = new Audio('/editAssignmentAttributesSound.mp3');


/*$('#edit-assignment').onclick = function(){
    console.log("hello");
    editAssignmentSound.play();
}*/
