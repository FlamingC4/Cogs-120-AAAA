'use strict';
//var requirejs = require('requirejs');

//var json = require('data.json');
//var jsonfile = require('jsonfile');

$(document).ready(function() {
    moveBootStrap();
    getTimer();
    startTimer();
    checkpointTimer();
});

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

/*function checkDate(dueDate,dueTime){
    for(var i = 0; i < 10; i++)
            if(dueDate.elements[i].value >= 0)
} 

/*function move() { 
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}*/

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


//for when assignment is due
function startTimer(/*duedate goes here*/){
    var currentDate = new Date();
    var dueDate = getTimer(2019, 11, 31, 23, 59, 59); //change this hard code
    //console.log(dueDate);

    $('#progress-timer').countdown(dueDate, function(event) {
        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));    
    });

    //console.log(toSeconds(dueDate));
    //return toSeconds(dueDate);   
    //console.log(toSeconds(dueDate));
}

//for checkpoint
function checkpointTimer(/*checkpoint interval goes here*/){
    var currentDate = new Date();
    var checkPoint = getTimer(2019, 11, 31, 23, 59, 59); //change this hard code
    //console.log(dueDate);

    $('#progress-timer2').countdown(checkPoint, function(event) {
        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));    
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

//start the global timer
var dueTime = new Date();

var dueYear = dueTime.setYear(2018);
var dueMonth = dueTime.setMonth(2);
var dueDay = dueTime.setDate(16);
var dueHours = dueTime.setHours(2);
var dueMinute = dueTime.setMinutes(0);
var dueSecond = dueTime.setSeconds(0);

console.log(toSeconds(dueTime));//sort of works

//placeholder time independent of everything
progress(toSeconds(dueTime) , toSeconds(dueTime) /*change this hard coded variable*/, $('#progressBarz'));

//Close the modal
var span = document.getElementsByClassName("close")[0];

//Button sound
var btn = document.getElementById("checkpoint0");
var modal = document.getElementById('myModal');

var checkpointAudio = new Audio('checkpoint.mp3');


btn.onclick = function() {
        modal.style.display = "block";
        checkpointAudio.play();
    }

//next button on modal
span.onclick = function() {
        modal.style.display = "none";
    }







