let scoreHome = document.getElementById('score-home')
let scoreGuest = document.getElementById('score-guest')

countHome = 0;
countGuest = 0;

scoreHome.textContent = countHome;
scoreGuest.textContent = countGuest;



function add1Point() {
    countHome += 1;
    scoreHome.textContent = countHome  
    if(countHome >= 99) {
        countHome = 0;
    } 
}

function add2Point() {
    countHome += 2;
    scoreHome.textContent = countHome  
    if(countHome >= 99) {
        countHome = 0;
    } 
}

function add3Point() {
    countHome += 3;
    scoreHome.textContent = countHome  
    if(countHome >= 99) {
        countHome = 0;
    } 
}

function add1PointGuest() {
    countGuest += 1;
    scoreGuest.textContent = countGuest  
    if(countGuest >= 99) {
        countGuest = 0;
    } 
}

function add2PointGuest() {
    countGuest += 2;
    scoreGuest.textContent = countGuest  
    if(countGuest >= 99) {
        countGuest = 0;
    } 
}

function add3PointGuest() {
    countGuest += 3;
    scoreGuest.textContent = countGuest  
    if(countGuest >= 99) {
        countGuest = 0;
    } 
}