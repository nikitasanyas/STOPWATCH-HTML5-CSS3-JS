var ms = 0, s = 0, m = 0, h = 0;
var timer;
var display;
var lap;

document.addEventListener("DOMContentLoaded", function() {
    display = document.querySelector('#displaytime h1');
    lap = document.querySelector('.lap');

    document.getElementById("start").addEventListener("click", start);
    document.getElementById("stop").addEventListener("click", stop);
    document.getElementById("pause").addEventListener("click", pause);
    document.getElementById("reset").addEventListener("click", reset);
    document.getElementById("laps").addEventListener("click", lapTime);
    document.getElementById("reset-lap").addEventListener("click", resetLap);


       
 
// Call the updateDate function to set the date when the page loads
updateDate();

});
 

function updateDate() {
    // Ensure that the element with id 'date' exists in the HTML
    var dateElement = document.getElementById("date");
    if (dateElement) {
        dateElement.innerText = new Date().toDateString();
    } else {
        console.error("Element with id 'date' not found.");
    }
}

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    display.innerHTML = getTimer();
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function stop() {
    clearInterval(timer);
    timer = false;
}

function pause() {
    clearInterval(timer);
    timer = false;
}

function reset() {
    clearInterval(timer);
    timer = false;
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    display.innerHTML = getTimer();
}

function lapTime() {
    var lapTime = document.createElement('li');
    lapTime.textContent = getTimer();
    lap.appendChild(lapTime);
}

function resetLap() {
    lap.innerHTML = '';
}


  
