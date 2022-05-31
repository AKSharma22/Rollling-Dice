// creating an array
var dice;
var dicevalue = ['&#9856;','&#9857;','&#9858;','&#9859;','&#9860;','&#9861;'];
var stop = true;
var timer;

// function for random change of dice number
function change() {
    var random = Math.floor(Math.random()*6);
    dice.innerHTML = dicevalue[random];
}

// for stop and start condition
function stopstart() {
    if(stop) {
        stop = false;
        timer = setInterval(change,100);
    }
    else{
        clearInterval(timer);
        stop = true;
    }
}
window.onload = function() {
    dice = document.getElementById("dice");
    stopstart();
}