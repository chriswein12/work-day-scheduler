var currentDate = moment().format('dddd, MMMM Do, YYYY');

var currentHour = moment().format('k');

console.dir(currentHour);

var scheduleItems = []

$(".time-block").on("click", ".saveBtn", function () {
    var scheduleItem = $(this).closest(".time-block").find(".description").val();
    console.log(scheduleItem);

    var scheduleTime = $(this).closest(".time-block").attr("id");
    console.log(scheduleTime);

    scheduleItems.push({
        text: scheduleItem,
        time: scheduleTime
    })

    localStorage.setItem("scheduleItems", JSON.stringify(scheduleItems));
   
})




var loadSchedule = function () {
    scheduleItems = JSON.parse(localStorage.getItem("scheduleItems"));

    $.each

    
}


$("#currentDay").append(currentDate);


$(".time-block").each(function() {
    var hour = $(this).closest(".time-block")
    .attr("id")
    .replace("hour-", "");
    
    if (hour < currentHour) {
        console.log(hour);
        $(this).addClass("past");
    }
    else if (hour > currentHour) {
        $(this).addClass("future");
    }
    else {
        $(this).addClass("present");
    }
})




    
// loadSchedule();
