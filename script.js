// veriable declaration
var seconds = 0;
var minutes = 0;
var hours = 0;
var interval;

function twoDigits(digit) {
    if(digit < 10) {
        return('0'+digit);
    } else {
        return(digit);
    }
}
// funtion for start timer
function start() {
    timer();
   interval = setInterval(timer,1000);
}
// funtion for pause timer
function pause() {
    clearInterval(interval);
}
// funtion for reset timer
function reset() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    document.getElementById('time').innerText = '00:00:00';
}
//funtion for timer calulation
function timer() {
    seconds++;
    if(seconds == 60) {
        minutes++
        seconds = 0;
        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('time').innerText = twoDigits(hours)+':'+twoDigits(minutes)+':'+twoDigits(seconds);
}