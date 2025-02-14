const EndDate = new Date("14 february, 2025 20:15:00").getTime();
const startDate = new Date().getTime();




let x = setInterval( function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = EndDate - now;

    //calculate days, min, hrs, secs
    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis = (60 * 60 * 1000);
    const oneMinInMillis = (60 * 1000);
    const oneSecondsinMillis = (1000);
    const days = Math.floor(distancePending / (oneDayInMillis));
    const hrs = Math.floor(distancePending%(oneDayInMillis)/(oneHourInMillis));
    const mins = Math.floor((distancePending%(oneHourInMillis)/(oneMinInMillis)));
    const secs = Math.floor((distancePending%(oneMinInMillis))/(oneSecondsinMillis));

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    //calculate widdth percentage for progress bar
    const totalDistance = EndDate - startDate;

    const percentageDistance = (distanceCovered/totalDistance)*100;

    //set width for progress bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }






 }, 1000);



   