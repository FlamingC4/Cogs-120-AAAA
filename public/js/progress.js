'use strict';
//var requirejs = require('requirejs');

//var json = require('data.json');
//var jsonfile = require('jsonfile');

$(document).ready(function() {
    moveBootStrap();
    timer();
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
    
//progressBar
/*function countDown() { 
    resetProgress();
    var i = 70;
    var j = 20;
    var k = 10;
    var counterBack = setInterval(function () {
      i--;      
      if (i >= 0) {
        $('.progress-bar-success').css('width', i + '%');
      } 
      else if (i < 0 && j >= 0){
        j--;       
        $('.progress-bar-warning').css('width', j + '%');
      }
      else if (i < 0 && j < 0 && k >= 0){
        k--;
        $('.progress-bar-danger').css('width', k + '%');
      }   
      else {        
        clearInterval(counterBack);
      }
    }, 100);
}*/

function timer(dueYear, dueMonth, dueDay, duehour, dueMinute, dueSecond){
    var dt = new Date();
    var dueTime = new Date();
    dueTime.setYear(2018);
    dueTime.setMonth(5+1);
    dueTime.setDate(24);
    dueTime.setHours(16);
    dueTime.setMinutes(42);
    dueTime.setSeconds(55);

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

}


//countdown with the timer
function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
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

progress(300, 600, $('#progressBarz'));

//var project = {name:"foo", estimated_time:"foo", actual_time:"foo"}
//addToJson("Cogs 108 A3", "3 Hours", "2 Hours");


