// Wait for DOM to load
document.addEventListener("DOMContentLoaded", onDocumentReady);

// DOM loaded
function onDocumentReady(){

    // Set UI refresh rate in milliseconds
    var refreshRate = 1000;

    // Get countdown time in milliseconds from date string
    var countDownDate = new Date("Dec 1, 2023 00:00:00").getTime();

    // Html Prefixes
    var daysPrefixText = "Days: ";
    var hoursPrefixText = "Hours: ";
    var minutesPrefixText = "Minutes: ";
    var secondsPrefixText = "Seconds: ";

    // HTML Refs
    var daysRef = document.getElementById("countdown-days");
    var hoursRef = document.getElementById("countdown-hours");
    var minutesRef = document.getElementById("countdown-minutes");
    var secondsRef = document.getElementById("countdown-seconds");

    updateUI = function(){
        // Gets the current time value
        var currentTime = new Date().getTime();
        // Calculate the difference between current time and countdown time
        var timeLeft = countDownDate - currentTime;

        // Convert timeleft from ms into days, hours, minutes and seconds
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update html elements with prefix + value
        daysRef.innerHTML = daysPrefixText + days;
        hoursRef.innerHTML = hoursPrefixText + hours;
        minutesRef.innerHTML = minutesPrefixText + minutes;
        secondsRef.innerHTML = secondsPrefixText + seconds;
    }

    // Update html after DOM loads
    updateUI();

    // Update html every x time
    setInterval(updateUI, refreshRate);
}