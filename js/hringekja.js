var timetableElement; 
var renderTimetableCarousel = function(){
    timetableElement = document.getElementById("carousel-slides-container");
    for(var i = 0; i<timetableArray.length; i++){
    var timetableArrayTemplate=`
    <div class=timeTableContainer_2>
            <div class="top-container">
                <div class="day-selectors">
                    <h3>${timetableArray[i].weekday}</h3>
                </div>
            </div>

            <div class=“bottom-container”>
            <div class=todays-classes>
    `

    for( var j = 0; j<timetableArray[i].classes.length; j++){
        timetableArrayTemplate += `

            <div class=single-class>
                <span>${timetableArray[i].classes[j].types}</span>
                <p>${timetableArray[i].classes[j].hours}</p>
                <p>${timetableArray[i].classes[j].name}</p>
            </div>

        `
    }
    timetableArrayTemplate += `
    </div>
    </div>
    </div>
    `
    timetableElement.innerHTML += timetableArrayTemplate;
    }
    moveDayNumber = 0;
    weekdayPosition = 0;

        // Upphafsstilla á daginn í dag
        timetableElement.style.left = '0px';
        var today = new Date()
        var dayOfWeek = today.getDay()
        changeDay(dayOfWeek-1)
}

var moveDayNumber = 0;
var weekdayPosition = 0;

var changeDay = function(direction){
    console.log(direction)
    weekdayPosition += direction

    if (weekdayPosition === 7) {
        // Komin á sunnudag, fara áfram á mánudag
        weekdayPosition = 0
        moveDayNumber = 0;
    } 
    else if (weekdayPosition === -1) {
        // Á mánudegi, fara til baka á sunnudag
        weekdayPosition = 6
        moveDayNumber += 340 * weekdayPosition * -1;
    } else {
        // Fara einn dag áfram eða til baka
        moveDayNumber += 340 * direction * -1;
    } 
    console.log(moveDayNumber);
    timetableElement.style.left = moveDayNumber + 'px';

    if(moveDayNumber <= timetableArray.length * 340 * -1){
            timetableElement.style.transition = 'all 0s';
            timetableElement.style.left = '0px';
            moveDayNumber=0;
            setTimeout(()=>{
                timetableElement.transition = 'all 2s';
                moveDayNumber += 340*direction;
                timetableElement.style.left = moveDayNumber + 'px';
                },200);
    }


}
