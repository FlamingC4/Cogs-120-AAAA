function checkPointIntervalAlert(){
	alert("How often you would like to be notified to enter progress)");
}

//check input from enter-name-page when user clicks submit
function checkInputTop(){

	var dueDate = $('#DueDate').val();
    var dueTime = $('#DueTime').val();    

 	var good = true;
 	
    if(!checkDateFormat(dueDate)){
    	alert("Please format Due Date to MM/DD/YYYY");
    	$("#DueDate").css("background-color","#ff3333");
    	good = false;	    	
    }
    else if(!checkValidDate(dueDate)){
    	alert("Please make sure Due Date is today or later");
    	$("#DueDate").css("background-color","#ff3333");
    	good = false;
    }

    if(!checkTimeFormat(dueTime)){
    	alert("Please format time in HH:MM in 24 hour format");
    	$("#DueTime").css("background-color","#ff3333");
    	good = false;
    }
    else if(!checkValidTime(dueDate, dueTime)){
    	alert("Please make sure time is later than today's current time");
    	$("#DueTime").css("background-color","#ff3333");
    	good = false;
    }
}

   

function checkInputBottom(){
	var startDate = $('#StartDate').val();
    var startTime = $('#StartTime').val();

    var good = true;

     if(!checkDateFormat(startDate)){
    	alert("Please format Desired Start Date to MM/DD/YYYY");
    	$("#StartDate").css("background-color","#ff3333");
    	good = false;
    }
    else if(!checkValidDate(startDate)){
    	alert("Please make sure Desired Start Date is today or later");
    	$("#StartDate").css("background-color","#ff3333");
    	good = false;	    	
    }
    else if(!checkStartDateEarlierThanDueDate(dueDate, startDate)){
    	alert("Please make sure you are starting before the Due Date");
    	$("#StartDate").css("background-color","#ff3333");
    	good = false;
    }

    if(!checkTimeFormat(startTime)){
    	alert("Please format Desired Start Time in HH:MM in 24 hour format");
    	$("#StartTime").css("background-color","#ff3333");
    	good = false;
    }
    else if(!checkValidTime(startDate, startTime)){
    	alert("Please make sure Desired Start Time is later than Desired Start Time");
    	$("#StartTime").css("background-color","#ff3333");
    	good = false;
    }
    else if(!checkStartTimeEarlierThanDueTime(dueDate, startDate, dueTime, startTime)){
    	alert("Please make sure you are starting before the Due Time");
    	$("#StartTime").css("background-color","#ff3333");
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
	if(time.length != 5)
		return false;
	var timeArray = time.split('');

	if(timeArray[0] + timeArray[1] < 00 || timeArray[0] + timeArray[1] > 23)
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
		if((currentDate.getHours() == tm.getHours()) && currentDate.getMinutes() > tm.getMinutes())
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

function checkStartDateEarlierThanDueDate(dueDate, startDate, dueTime, startTime){
	//split date
	var dueDateArray = dueDate.split('');	
	var startDateArray = startDate.split('');

	//split time
	console.log(dueDate);
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
	//return true;
	return false;
}



