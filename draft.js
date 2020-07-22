
/*let timerLength = 25;
let targetTime = 
let timer = document.getElementById('timer');

function increment() {
	timerLength = timerLength + 1;
	timer.innerHTML = timerLength;
	console.log(timerLength);
}

function decrement() {
	timerLength = timerLength - 1;
	timer.innerHTML = timerLength;
	console.log(timerLength);
}

let start = document.getElementById('start');
start.addEventListener('click', clickStart);
let stop = document.getElementById('stop');
stop.addEventListener('click', clickStop);
let incrementer = document.getElementById('incrementer');
incrementer.addEventListener('click', increment);
let decrementer = document.getElementById('decrementer');


function getCountdownTime() {
	let now = new Date().getTime();
	let countdownTime = targetTime - now;
	let minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
	let prettyTimer = `${minutes}:${seconds}`;
	timer.innerHTML = prettyTimer;
}

let checkTime; 
function clickStart() {
	checkTime = setInterval(getCountdownTime, 1000);	
}

function clickStop() {
	clearInterval(checkTime);
}
*/