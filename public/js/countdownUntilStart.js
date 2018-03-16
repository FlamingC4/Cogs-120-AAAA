//start the timer
$(document).ready(function() {
    startCounterWizardofOzTimer();
});
// Get the modal
var modal = document.getElementById('myModal');
var modalAGAIN = document.getElementById('myModalAGAIN');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtnAGAIN");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

var audio1 = new Audio('/Alarm.mp3');
audio1.loop = true;

var audio2 = new Audio('/StrongAlarm.mp3');
audio2.loop = true;

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    audio1.play();
}

btn2.onclick = function() {
    modal.style.display = "block";
    modalAGAIN.style.display = "block";
    audio2.play();
}

function startCounterWizardofOzTimer(/*checkpoint interval goes here*/){
    var currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes()+5)
    var checkPoint = currentDate;
    
    $('#progress-timer').countdown(checkPoint,function(event) {
        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));    
    });
}

// When the user clicks on <span> (x), close the modal
/*span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/

$(".toggleButton").click(function(e) {
    $(".hiddenDevTools").fadeToggle();
});
