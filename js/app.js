let hours = 24;
let minutes = 0;

counter = setInterval(decrement, 10);

function decrement(){
    if(hours > 0 || minutes > 0){
        if(minutes > 0){
            minutes --;
        } else {
            minutes = 59;
            hours --;
        }
        const time = convertCounterToString(hours, minutes);
        console.log(time)
    } else {
        clearInterval(counter);
    }
}

function convertCounterToString(hours, minutes){
    if(hours < 10){
        hours = "0" + hours;
    } else {
        hours = "" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    } else {
        minutes = "" + minutes;
    }
    return hours+ minutes;
}