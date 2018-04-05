function initial(){
	var userFinalDate;
	var userHonoraryLeave;
	if(userFinalDate = localStorage.getItem('UserFinalDate')){
		document.getElementById("finalDateInput").value = userFinalDate;
	}
	if(userHonoraryLeave = localStorage.getItem('UserHonoraryLeave')){
		document.getElementById("honoraryLeave").value = userHonoraryLeave;
	}
}

function refresh(){
	var currentDate = new Date();
	
	var finalDateValue = document.getElementById('finalDateInput').value
	var finalDate = new Date(finalDateValue);

	var honoraryLeaveValue = document.getElementById('honoraryLeave').value
	
	var result = calRemainingPeriod(finalDate,currentDate);
	var diffDays = result.differenceDays;
	var remainingDays = result.remainingDays - honoraryLeaveValue;
	var holidays = result.holidaysCount;
	//
	document.getElementById('currentDate').innerHTML = currentDate.getFullYear() +'/'+(currentDate.getMonth()+1)+'/'+currentDate.getDate();
	document.getElementById('finalDate').innerHTML = finalDate.getFullYear() +'/'+(finalDate.getMonth()+1)+'/'+finalDate.getDate();
	document.getElementById('diffDays').innerHTML = diffDays;
	document.getElementById('remainingDays').innerHTML = remainingDays;
	document.getElementById('holidaysCount').innerHTML = holidays;
	//
	localStorage.setItem('UserFinalDate',finalDateValue);
	localStorage.setItem('UserHonoraryLeave',honoraryLeaveValue);
}