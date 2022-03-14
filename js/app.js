let minutes = 24;
let secondes = 0;

const tiles = document.getElementsByClassName('tile');
for (const tile of tiles) {
    tile.classList.add('grey');
}

const huits = document.getElementsByClassName('huit');

function getHuitTiles(position){
    return huits[position].children;
}

counter = setInterval(decrement, 1000);

function decrement(){
    if(minutes > 0 || secondes > 0){
        if(secondes > 0){
            secondes --;
        } else {
            secondes = 59;
            minutes --;
        }
        const time = convertCounterToString(minutes, secondes);
        render(time);
    } else {
        clearInterval(counter);
    }
}

function convertCounterToString(minutes, secondes){
    if(minutes < 10){
        minutes = "0" + minutes;
    } else {
        minutes = "" + minutes;
    }
    if(secondes < 10){
        secondes = "0" + secondes;
    } else {
        secondes = "" + secondes;
    }
    return minutes+ secondes;
}


function render(time){
    for (let index = 0; index < time.length; index++) {
        const number = time[index];
        const tiles = getHuitTiles(index);
        for (const tile of tiles) {
            if(tile.classList[1].includes(number)){
                tile.classList.add('red');
            } else {
                tile.classList.remove('red');
            }
        }

    }
}