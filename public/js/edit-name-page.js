function checkPointIntervalAlert(){
	alert("How often you would like to be notified to enter progress)");
}


//check input from enter-name-page when user clicks submit
function checkInput(){
	var dueDate = $('#DueDate').val();
    var dueTime = $('#DueTime').val();
    var startDate = $('#StartDate').val();
    var startTime = $('#StartTime').val();    
    if(!checkDateFormat(dueDate)){
    	alert("Please format Due Date to MM/DD/YYYY");
    	return false;
    }
    if(!checkValidDate(dueDate)){
    	alert("Please make sure Due Date is today or later");
    	return false;
    }

    return true;
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