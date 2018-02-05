'use strict';
/*$(document).ready(function() {
    move();
})*/


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