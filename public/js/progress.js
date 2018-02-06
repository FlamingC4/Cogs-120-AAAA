'use strict';
$(document).ready(function() {
    moveBootStrap();
})


/*function initializePage() {
    $("#testjs").click(function(e) {
        $('.jumbotron h1').text("Experience Chan! It's not a lot of questions.Too many questions is the Chan disease.The best way is just to observe the noise of the world. The answer to your questions?Ask your own heart.");
        $("#testjs").text("Please wait...");
        $(".jumbotron p").addClass("active");
    });
}*/


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

function countDown() {    
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
}