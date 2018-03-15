$(document).ready(function() {
	$('select').material_select();
   /* $("html, body").animate({ scrollTop: 400 }, "slow");*/

    //$("html, body").animate({ scrollTop: $(document).height() }, "slow");    
});

/*$(document).on('click', 'a[href^="#"]', function(e) {
	/*e.preventDefault();
	alert("hi");
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000); 
}); */

function checkPointIntervalAlert(){
	alert("How often you would like to be notified to enter progress");
}

//check input from enter-name-page when user clicks submit
function checkInputTop(){

	//dueDate
	var dueDate= $('#DueDate').val();
	var dueDateValueArray = dueDate.split('');
	var dueDateMM;
	var dueDateDD;
	var dueDateYYYY;
	dueDateYYYY = dueDateValueArray[dueDateValueArray.length -4] + dueDateValueArray[dueDateValueArray.length -3] + dueDateValueArray[dueDateValueArray.length -2] + dueDateValueArray[dueDateValueArray.length -1];

	var dueDateValueArray = dueDate.split(' ');
	//console.log(dueDateValueArray[0])
	if (dueDateValueArray[0].length == 1)
		dueDateDD = "0" + dueDateValueArray[0];
	else
		dueDateDD = dueDateValueArray[0];
	
	if(dueDate.includes("Janurary"))
		dueDateMM ="01";
	else if (dueDate.includes("Feburary"))
		dueDateMM = "02";
	else if (dueDate.includes("March"))
		dueDateMM = "03";
	else if (dueDate.includes("April"))
		dueDateMM = "04";
	else if (dueDate.includes("May"))
		dueDateMM = "05";
	else if (dueDate.includes("June"))
		dueDateMM = "06";
	else if (dueDate.includes("July"))
		dueDateMM = "07";
	else if (dueDate.includes("August"))
		dueDateMM = "08";
	else if (dueDate.includes("September"))
		dueDateMM = "09";
	else if (dueDate.includes("October"))
		dueDateMM = "10";
	else if (dueDate.includes("November"))
		dueDateMM = "11";
	else 
		dueDateMM = "12";

	var dueDate = dueDateMM + '/' + dueDateDD + '/' + dueDateYYYY;
	

	//startDate
	var startDate= $('#StartDate').val();
	var startDateValueArray = startDate.split('');
	var startDateMM;
	var startDateDD;
	var startDateYYYY;
	startDateYYYY = startDateValueArray[startDateValueArray.length -4] + startDateValueArray[startDateValueArray.length -3] + startDateValueArray[startDateValueArray.length -2] + startDateValueArray[startDateValueArray.length -1];

	var startDateValueArray = startDate.split(' ');
	//console.log(startDateValueArray[0])
	if (startDateValueArray[0].length == 1)
		startDateDD = "0" + startDateValueArray[0];
	else
		startDateDD = startDateValueArray[0];
	
	if(startDate.includes("Janurary"))
		startDateMM ="01";
	else if (startDate.includes("Feburary"))
		startDateMM = "02";
	else if (startDate.includes("March"))
		startDateMM = "03";
	else if (startDate.includes("April"))
		startDateMM = "04";
	else if (startDate.includes("May"))
		startDateMM = "05";
	else if (startDate.includes("June"))
		startDateMM = "06";
	else if (startDate.includes("July"))
		startDateMM = "07";
	else if (startDate.includes("August"))
		startDateMM = "08";
	else if (startDate.includes("September"))
		startDateMM = "09";
	else if (startDate.includes("October"))
		startDateMM = "10";
	else if (startDate.includes("November"))
		startDateMM = "11";
	else 
		startDateMM = "12";

	var startDate = startDateMM + '/' + startDateDD + '/' + startDateYYYY;

	//dueTime
	var dueTime = $('#DueTime').val();	
	var dueTimeArray = dueTime.split('');
    var dueTimeHH
    if(dueTimeArray[dueTimeArray.length - 2] + dueTimeArray[dueTimeArray.length - 1] == "PM")
        if(dueTimeArray[0] + dueTimeArray[1] == 12) {
            console.log("This is entered");
            dueTimeHH = 12;
        }
        else {
    	    dueTimeHH = parseInt(dueTimeArray[0] + dueTimeArray[1]) + 12;
        }
    else
    	dueTimeHH = dueTimeArray[0] + dueTimeArray[1];
    var dueTimeMM = dueTimeArray[3] + dueTimeArray[4];
    var dueTime = dueTimeHH + ":" + dueTimeMM; 
    //console.log(dueTime);  

    //startTime
    var startTime = $('#StartTime').val();	
	var startTimeArray = startTime.split('');
    var startTimeHH
    if(startTimeArray[startTimeArray.length - 2] + startTimeArray[startTimeArray.length - 1] == "PM")
        if(dueTimeArray[0] + dueTimeArray[1] == 12) {
            startTimeHH = 12;
        }
        else {
    	    startTimeHH = parseInt(startTimeArray[0] + startTimeArray[1]) + 12;
        }
    else
    	startTimeHH = startTimeArray[0] + startTimeArray[1];
    var startTimeMM = startTimeArray[3] + startTimeArray[4];
    var startTime = startTimeHH + ":" + startTimeMM;    

 	var good = true;

 	if(!checkDateFormat(startDate)){
    	alert("Please select a Start Date");
    	$("#StartDate").css("background-color","#ffff99");    	
    	good = false;
    }
    else if(!checkValidDate(startDate)){
    	alert("Please make sure Start Date is today's current time or later");
    	$("#StartDate").css("background-color","#ffff99");    	
    	good = false;	    	
    }

    if(!checkTimeFormat(startTime)){
    	alert("Please select a Start Time");
    	$("#StartTime").css("background-color","#ffff99");    	   	
    	good = false;
    }


 	if(!checkDateFormat(dueDate)){
    	alert("Please select a Due Date");
    	$("#DueDate").css("background-color","#ffff99");
    	$("#wrong7").css("background-color","#ffff99");
    	$("#wrong8").css("background-color","#ffff99");
    	good = false;
    } 	
    else if(!checkValidDate(dueDate)){
    	alert("Please make sure Due Date is today or later");
    	$("#DueDate").css("background-color","#ffff99");    	
    	good = false;
    }

    else if(!checkValidTime(dueDate, dueTime)){
    	alert("Please make sure Due Time is later than today's current time");
    	$("#DueDate").css("background-color","#ffff99");    	
    	good = false;
    }
   
    else if(!checkStartDateEarlierThanDueDate(dueDate, startDate)){
    	alert("Please make sure your Due Date is the same or later than your Start Date");
    	$("#StartDate").css("background-color","#ffff99");
    	$("#DueDate").css("background-color","#ffff99");    	
    	good = false;
    }

    if(!checkTimeFormat(dueTime)){
    	alert("Please select a Due Time");
    	$("#DueTime").css("background-color","#ffff99");    	    	
    	good = false;
    }
    else if(!checkValidTime(startDate, startTime)){
    	alert("Please make sure inputted Start Time is today's current time or later");
    	$("#StartTime").css("background-color","#ffff99");
    	$("#DueTime").css("background-color","#ffff99"); 
    	
    	good = false;
    }
    else if(!checkStartTimeEarlierThanDueTime(dueDate, startDate, dueTime, startTime))
    {
    	alert("Please make sure Start Time is before the Due Time");
    	$("#StartTime").css("background-color","#ffff99");
    	$("#DueTime").css("background-color","#ffff99"); 
    	good = false;
    }
    

    return good;
}

   

function checkInputBottom(){
   
    var checkpoint = $('#Checkpoint').val();
    var estimate = $('#Estimate').val(); 
    
    var good = true;

     
    if(checkpoint.length != 5){
    	alert("Please format Checkpoint Interval in HR:MIN format");
    	$("#Checkpoint").css("background-color","#ffff99");    	
    	good = false;
    }
    if(estimate.length != 5){
    	alert("Please format Your Estimate in HR:MIN in format");
    	$("#Estimate").css("background-color","#ffff99");    	
    	good = false;
    }

    return good;
}

function checkDateFormat(date){
	if(date.length != 10)
		return false;		
	var dateArray = date.split('');
	//console.log(dateArray[0] + dateArray[1]);

	//check month
	if (dateArray[0] != '0' && dateArray[0] != '1')
		return false;	
	if (dateArray[0] == '1')
		if (dateArray[1] > '9' && dateArray[1] < '0')
			return false;
	if (dateArray[0] == '0')
		if (dateArray[1] > '9' && dateArray[1] < '1')
			return false;

	//first slash
	if (dateArray[2] != '/')
		return false;

	//second slash
	if (dateArray[5] != '/')
		return false;

	//check year
	if ((dateArray[6] > '9' && dateArray[6] < '0') && (dateArray[7] > '9' && dateArray[7] < '0') && 
		(dateArray[8] > '9' && dateArray[8] < '0') && (dateArray[9] > '9' && dateArray[9] < '0'))
		return false;

	//check month with 30 days
	if((dateArray[0] + dateArray[1]) == 04 || (dateArray[0] + dateArray[1]) == 06 || (dateArray[0] + dateArray[1]) == 09 ||
			(dateArray[0] + dateArray[1]) == 04 ||(dateArray[0] + dateArray[1]) == 11)
		if (dateArray[3] + dateArray[4] < 0 || dateArray[3] + dateArray[4] > 30)
			return false;

	//not leap year
	if(parseInt(dateArray[6] + dateArray[7] + dateArray[8] + dateArray[9]) % 4 != 0)
		if((dateArray[0] + dateArray[1]) == 02)
			if (dateArray[3] + dateArray[4] < 0 || dateArray[3] + dateArray[4] > 28)
				return false;

	//leap year
	if(parseInt(dateArray[6] + dateArray[7] + dateArray[8] + dateArray[9]) % 4 == 0)
		if((dateArray[0] + dateArray[1]) == 02)
			if (dateArray[3] + dateArray[4] < 0 || dateArray[3] + dateArray[4] > 29)
		return false;

	//check month with 30 days
	if((dateArray[0] + dateArray[1]) == 04 || (dateArray[0] + dateArray[1]) == 06 || (dateArray[0] + dateArray[1]) == 09 ||
			(dateArray[0] + dateArray[1]) == 04 ||(dateArray[0] + dateArray[1]) == 11)
		if (dateArray[3] + dateArray[4] < 0 || dateArray[3] + dateArray[4] > 30)
			return false;

	if((dateArray[0] + dateArray[1]) == 01 || (dateArray[0] + dateArray[1]) == 03 || (dateArray[0] + dateArray[1]) == 05 ||
		(dateArray[0] + dateArray[1]) == 07 ||(dateArray[0] + dateArray[1]) == 8 ||(dateArray[0] + dateArray[1]) == 12)
		if (dateArray[3] + dateArray[4] < 0 || dateArray[3] + dateArray[4] > 31)
			return false;

	return true;
	

}

function checkValidDate(date){
	var currentDate = new Date();

	//user's inputted date
	var dateArray = date.split('');

	var dt = new Date();

	var month = parseInt(dateArray[0] + dateArray[1]);
	var day = parseInt(dateArray[3] + dateArray[4]);
	var year = parseInt(dateArray[6] + dateArray[7] + dateArray[8] + dateArray[9]);

	dt.setYear(year);
    dt.setMonth(month - 1); //November is 11
    dt.setDate(day);
    //console.log(dt);
    //console.log(currentDate);
    //convert whole object into seconds
    if ((Math.floor(currentDate.valueOf()/1000)) > (Math.floor(dt.valueOf()/1000)))
    	return false;

    return true;

}

function checkTimeFormat(time){
	//console.log(time);
	if(time.length != 5)
		return false;
	var timeArray = time.split('');

	if(timeArray[0] + timeArray[1] < 00 || timeArray[0] + timeArray[1] > 24)
		return false;
	if(timeArray[2] != ':')
		return false;
	if(timeArray[3] + timeArray[4] < 00 || timeArray[3] + timeArray[4] > 59)
		return false;

	return true
}

function checkValidTime(date, time){
	var currentDate = new Date();
	var timeArray = time.split('');
	
	//check user input date
	var dateArray = date.split('');
	var dt = new Date();


	var month = parseInt(dateArray[0] + dateArray[1]);
	var day = parseInt(dateArray[3] + dateArray[4]);
	var year = parseInt(dateArray[6] + dateArray[7] + dateArray[8] + dateArray[9]);

	dt.setYear(year);
    dt.setMonth(month - 1); //November is 11
    dt.setDate(day);

	//User's inputted time
	var tm = new Date();

	var hour = parseInt(timeArray[0] + timeArray[1]);
	var minute = parseInt(timeArray[3] + timeArray[4]);

	tm.setHours(hour);
	tm.setMinutes(minute);
	
	//if it's today's date
	if ((dt.getFullYear() == tm.getFullYear()) && (dt.getMonth() == tm.getMonth()) && (dt.getDate() == tm.getDate())){
		if(currentDate.getHours() > tm.getHours())
			return false;
		if((currentDate.getHours() == tm.getHours()) && currentDate.getMinutes() -5 > tm.getMinutes())
			return false;
	}
	return true;
}

function checkStartDateEarlierThanDueDate(dueDate, startDate){
	var dueDateArray = dueDate.split('');	
	var startDateArray = startDate.split('');

	//make sure dueYear>startYear
	if((dueDateArray[6] + dueDateArray[7] + dueDateArray[8] + dueDateArray[9]) <
		(startDateArray[6] + startDateArray[7] + startDateArray[8] + startDateArray[9]))
		return false;	
	if((dueDateArray[6] + dueDateArray[7] + dueDateArray[8] + dueDateArray[9]) == 
		(startDateArray[6] + startDateArray[7] + startDateArray[8] + startDateArray[9])){
		if((dueDateArray[0] + dueDateArray[1]) < (startDateArray[0] + startDateArray[1]))
			return false;
		else if ((dueDateArray[0] + dueDateArray[1]) == (startDateArray[0] + startDateArray[1]))
			if ((dueDateArray[3] + dueDateArray[4]) < (startDateArray[3] + startDateArray[4]))
			return false;
	}
	return true;
}

function checkStartTimeEarlierThanDueTime(dueDate, startDate, dueTime, startTime){
	//split date
	var dueDateArray = dueDate.split('');	
	var startDateArray = startDate.split('');

	//split time
	
	var dueTimeArray = dueTime.split('');
	var startTimeArray = startTime.split('');

	//if the dates are the same, now we check the same
	if((dueDateArray[0] + dueDateArray[1] + dueDateArray[3] + dueDateArray[4] + 
		dueDateArray[6] + dueDateArray[7] + dueDateArray[8] + dueDateArray[9]) == 
		(startDateArray[0] + startDateArray[1] + startDateArray[3] + startDateArray[4] +
		startDateArray[6] + startDateArray[7] + startDateArray[8] + startDateArray[9])){
		if((dueTimeArray[0] + dueTimeArray[1]) < (startTimeArray[0] + startTimeArray[1]))
			return false;
		else if ((dueTimeArray[0] + dueTimeArray[1]) == (startTimeArray[0] + startTimeArray[1]))
			if ((dueTimeArray[3] + dueTimeArray[4]) > (startTimeArray[3] + startTimeArray[4]))
				return false;
	}
	return true;
	//return false;
}

function checkCheckpointFormat(checkpoint){

}

function autoScroll() {
    var valid = checkInputTop();    
   if(valid) { 
        //currently broken
        var nextPage = $("#start-forms").offset().top;
        $("html, body").animate({ scrollTop: 200 }, "slow"); 
        //window.scrollBy(0, 400);
    }
}
