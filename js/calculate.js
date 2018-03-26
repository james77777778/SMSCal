function calRemainingPeriod(finalDate,currentDate)
{
	var _MS_PER_DAY = 1000 * 60 * 60 * 24;
	var holidays = [ 
		new Date(2018,0,1),
		new Date(2018,1,15),
		new Date(2018,1,16),
		new Date(2018,1,19),
		new Date(2018,1,20),
		new Date(2018,1,28),
		new Date(2018,3,4),
		new Date(2018,3,5),
		new Date(2018,3,6),
		new Date(2018,5,18),
		new Date(2018,8,24),
		new Date(2018,9,10),
		new Date(2018,11,31),
	];
	
	var currentDateUTC = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
	var finalDateUTC = Date.UTC(finalDate.getFullYear(), finalDate.getMonth(), finalDate.getDate());
	var diffDays = Math.floor((finalDateUTC - currentDateUTC)/_MS_PER_DAY)
	
	////////////////////
	//calculate weekends
	////////////////////
	var mod = (diffDays + 1) % 7;
	var weekendDays = (((diffDays + 1) - mod) / 7) * 2;
	
	if (mod != 0) { // iterate through remainder days
    var startPartialWeek = new Date();
    var endPartialWeek = finalDate;
    startPartialWeek.setTime(finalDate.getTime() - (mod - 1)*_MS_PER_DAY);
    for (var d = startPartialWeek; d <= endPartialWeek; d.setDate(d.getDate() + 1)) {
        if(d.getDay() == 0 || d.getDay() == 6) {
            weekendDays++;
			}
		}
	}
	////////////////////
	
	////////////////////
	//calculate holidays
	////////////////////
	var holidaysCount = 0;
	for(var i = 0; i < holidays.length; i++)
	{
		if( holidays[i]>=currentDateUTC && holidays[i]<=finalDateUTC )
			holidaysCount++;
	}
	////////////////////
	
	var remainingDays = diffDays - weekendDays - holidaysCount;
	return {
		remainingDays : remainingDays , 
		differenceDays: diffDays,
		holidaysCount: holidaysCount
	};
}