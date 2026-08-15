//create a time data function to display the current time
function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hour
    var min = d.getMinutes(); //Get current minute
    var sec = d.getSeconds(); //Get current second
    var ampm; //Declare ampm variable

    var gmthr = d.getUTCHours(); //Get current GMT hour (military time)
    var gmtampm; //Declare GMT AM/PM variable
    var timeDiff; // To store time difference between UTC and local time
    var adjTimeDiff; // To store time difference converted to positive number
    var timeZone; // To store the 4 timezones

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }

    // Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    //Convert GMT from military time to standard time
    if (gmthr == 0) {
        gmthr = 12;
        gmtampm = "AM";
    } else if (gmthr < 12) {
        gmtampm = "AM";
    } else if (gmthr == 12) {
        gmtampm = "PM";
    } else {
        gmthr -= 12;
        gmtampm = "PM";
    }

    //Determine AM or PM
    if (hr == 0) {
        hr = 12;
        ampm = "AM";
    } else if (hr == 12) {
        ampm = "PM"; //Set to PM
    } else if (hr > 12) {
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    //Calculate time difference between GMT hour and local hour
    timeDiff = d.getUTCHours() - d.getHours();

    //Convert negative time difference to positive
    if (timeDiff < 0) {
        adjTimeDiff = -timeDiff;
    } else {
        adjTimeDiff = timeDiff;
    }

    //Normalize wrapped values (ex: 16 should become 8)
    if (adjTimeDiff > 12) {
        adjTimeDiff = 24 - adjTimeDiff;
    }

    //Check timezone based on adjusted time difference
    switch (adjTimeDiff) {
        case 7:
            timeZone = "PST";
            break;
        case 6:
            timeZone = "MST";
            break;
        case 5:
            timeZone = "CST";
            break;
        case 4:
            timeZone = "EST";
            break;
        default:
            timeZone = "GMT";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone; //Create time string with timezone

    document.getElementById("clock").innerText = time; //Display time in clock span
}

currentTime(); //Call currentTime function to display time immediately

setInterval(currentTime, 1000); //Call currentTime function every second
