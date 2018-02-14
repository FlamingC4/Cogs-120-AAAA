'use strict';
//var requirejs = require('requirejs');

//var json = require('data.json');
//var jsonfile = require('jsonfile');

$(document).ready(function() {
    moveBootStrap();
    getTimer();
})

function move() { 
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
    


function getTimer(dueYear, dueMonth, dueDay, dueHours, dueMinute, dueSecond){
    var dt = new Date();
    var dueTime = new Date();

    dueTime.setYear(2019);
    dueTime.setMonth(0);
    dueTime.setDate(1);
    dueTime.setHours(0);
    dueTime.setMinutes(0);
    dueTime.setSeconds(0);

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
    
$('#progress-timer').countdown(leftYear + "/" + leftMonth + "/" + leftDay + " " + leftHour + ":" + leftMinute + ":" + leftSecond, function(event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));    
  });
    var timeLeft = (leftSecond) + (60*leftMinute) + (3600*leftHour) + (3600*24*leftDay);
    return timeLeft;

}

/*function timer(years, months, days, hours, minutes, seconds){
    $('#progress-timer').countdown(years + "/" + months + "/" + days + " " + hours + ":" + minutes + ":" + seconds, function(event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));    
  });
}*/


//countdown with the timer
function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, timetotal);
    }
};

function addToJson(name, estimated_time, actual_time){
    //json.writeFile('data.json', "name :" + name + " estimated_time :" + estimated_time + 
       // " actual_time :" + actual_time);

}

//start the global timer
var dueTime = new Date();

    var dueYear = dueTime.setYear(2019);
    var dueMonth = dueTime.setMonth(0);
    var dueDay = dueTime.setDate(0);
    var dueHours = dueTime.setHours(0);
    var dueMinute = dueTime.setMinutes(0);
    var dueSecond = dueTime.setSeconds(0);

//timer(dueYear, dueMonth, dueDay, dueHours, dueMinute, dueSecond);
progress(0, 600, $('#progressBarz'));

//var project = {name:"foo", estimated_time:"foo", actual_time:"foo"}
//addToJson("Cogs 108 A3", "3 Hours", "2 Hours");


