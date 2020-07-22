/* Break Logic */
let breakLength = document.getElementById('break-length');
let breakLengthValue = 5;

document.getElementById('break-decrement').addEventListener('click', decrementBreak);
document.getElementById('break-increment').addEventListener('click', incrementBreak);

function decrementBreak() {
	if (breakLengthValue === 1) {
		return breakLengthValue;
	} else {
 	breakLengthValue = breakLengthValue - 1;
	breakLength.textContent = breakLengthValue;
	}
}

function incrementBreak() {
	if (breakLengthValue === 60) {
		return breakLengthValue;
	} else {
 	breakLengthValue = breakLengthValue + 1;
	breakLength.textContent = breakLengthValue;
	}
}

/* Session Logic */
let sessionLength = document.getElementById('session-length');
let timeLeft = document.getElementById('time-left');
let sessionLengthValue = 25;

document.getElementById('session-decrement').addEventListener('click', decrementSession);
document.getElementById('session-increment').addEventListener('click', incrementSession);

function decrementSession() {
	if (sessionLengthValue === 1) {
		return sessionLengthValue;
	} else {
	sessionLengthValue= sessionLengthValue - 1;
	sessionLength.textContent = sessionLengthValue;
	timeLeft.textContent = sessionLengthValue + ":00";
	}
}

function incrementSession() {
	if (sessionLengthValue === 60) {
		return sessionLengthValue;
	} else {
	sessionLengthValue = sessionLengthValue + 1;
	sessionLength.textContent = sessionLengthValue;
	timeLeft.textContent = sessionLengthValue + ":00";
	}
}

/* Timer Logic */
document.getElementById('start_stop').addEventListener('click', clickTimer);
document.getElementById('reset').addEventListener('click', clickReset);

function getCountdownTime() {
	let now = Date.now()
	let distance = targetSession - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	let prettyTimer = `${minutes}:${seconds}`;
	timeLeft.textContent = prettyTimer;
}

let targetSession;
let timer;
let timerRunning = false;
function clickTimer() {
	timerRunning = !timerRunning;
	if (timerRunning === true) {
		targetSession = Date.now() + (sessionLengthValue * 60 * 1000);
		timer = setInterval(getCountdownTime, 1000);
	} else {
		clearInterval(timer);
	}
}
function clickReset() {
	clearInterval(timer);
	timerRunning = false;
	sessionLengthValue = 25;
	sessionLength.textContent = sessionLengthValue;
	timeLeft.textContent = sessionLengthValue + ":00";
}




/*Break Time */
let targetBreak =  new Date().getTime() + 1000 * 60 * breakLengthValue;