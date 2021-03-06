// Create variables for time and date.
var currentDate = moment().format('dddd, MMMM Do, YYYY');

var currentHour = moment().format('k');

// Function to save schedule item text to local storage using the div id as the key.
$(".time-block").on("click", ".saveBtn", function () {
    var scheduleText = $(this).closest(".time-block").find(".description").val();
    console.log(scheduleText);

    var scheduleTime = $(this).closest(".time-block").attr("id");
    console.log(scheduleTime);

    localStorage.setItem(scheduleTime, scheduleText);
})

// Function to load the schedule from the local storage.
var loadSchedule = function () {
   
    var hour9 = localStorage.getItem("hour-09");
    $("#hour-09 textarea").append(hour9);

    var hour10 = localStorage.getItem("hour-10");
    $("#hour-10 textarea").append(hour10);

    var hour11 = localStorage.getItem("hour-11");
    $("#hour-11 textarea").append(hour11);

    var hour12 = localStorage.getItem("hour-12");
    $("#hour-12 textarea").append(hour12);

    var hour13 = localStorage.getItem("hour-13");
    $("#hour-13 textarea").append(hour13);

    var hour14 = localStorage.getItem("hour-14");
    $("#hour-14 textarea").append(hour14);

    var hour15 = localStorage.getItem("hour-15");
    $("#hour-15 textarea").append(hour15);

    var hour16 = localStorage.getItem("hour-16");
    $("#hour-16 textarea").append(hour16);

    var hour17 = localStorage.getItem("hour-17");
    $("#hour-17 textarea").append(hour17);
}

// Adding the current date to the header.
$("#currentDay").append(currentDate);


// Function to determine color coding of text cells based on time of day.
var updateTime = function () {
  
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
}

// Running updateTime function for the first time.
updateTime();

// Running updateTime every 5 minutes afterwards.
setInterval(function () {
updateTime();
}, 300000)

// Call to load schedule upon opening the browser.   
loadSchedule();
