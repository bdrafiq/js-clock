let clock = document.getElementById("clock");
let greetings = document.getElementById("greetings");
let picture = document.getElementById("picture");

 // Parts of the Day
    // Morning     5 am to 12 pm (noon)
    // Afternoon     12 pm to 5 pm
    // Evening     5 pm to 9 pm
    // Night         9 pm to 4 am

let imgeFunc = function updatingImg() {  
    let hour = new Date().getHours; 
    if ((hour <= 5) && (hour => 11)) {
        greetings.innerText = "Good Morning!";
        picture.src = "pictures/morning.jpg";
    } else if ((hour <= 12) && (hour <= 17)) {
        greetings.innerText = "Good Afternoon!";
        picture.src = "pictures/mid-day.jpg";
    } else if ((hour <= 18) && (hour => 24)) {
        greetings.innerText = "Good Evening!";
        picture.src = "pictures/sunset1.jpg";
    } else {
        greetings.innerText = "Good Night!";
        picture.src = "pictures/night.jpg";
    }
}

function digitalClock() {
    let timeAndTime = new Date();    
    let currentTime = timeAndTime.getTime();
    let hour = timeAndTime.getHours();
    let min = timeAndTime.getMinutes();
    let sec = timeAndTime.getSeconds();
    let amPm = "";

    setInterval(imgeFunc(), 1000 * 60 * 60)

    if (hour <= 12) {
        amPm = "AM"
    } else {
        amPm = "PM"
    }

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    if (hour > 12) {
        hour = hour - 12;
        hour = "0" + hour;
    }

    clock.innerText = hour + ":" + min + ":" + sec + ":" + " "+ amPm;
}

setInterval(digitalClock, 1000);