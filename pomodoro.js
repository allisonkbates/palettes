/* Break Logic */
let breakLength = document.getElementById('break-length');
let breakLengthValue = 5;

document.getElementById('break-decrement').addEventListener('click', decrementBreak);
document.getElementById('break-increment').addEventListener('click', incrementBreak);

function decrementBreak() {
	if (breakLengthValue <= 1) {
		return;
	} else {
		breakLengthValue = breakLengthValue - 1;
		breakLength.textContent = breakLengthValue;
	}
}

function incrementBreak() {
	if (breakLengthValue >= 60) {
		return;
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
	timeLeft.textContent = `${sessionLengthValue}:00`;
	}
}

function incrementSession() {
	if (sessionLengthValue === 60) {
		return sessionLengthValue;
	} else {
	sessionLengthValue = sessionLengthValue + 1;
	sessionLength.textContent = sessionLengthValue;
	timeLeft.textContent = `${sessionLengthValue}:00`;
	}
}

/* Timer Logic */
let countdown;
document.getElementById('start_stop').addEventListener('click', startTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

function timer(seconds) {
	clearInterval(countdown); // add logic here for pausing resuming
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now())/ 1000);
			if (secondsLeft < 0) {
				clearInterval(countdown);
				return;
			}
			displayTimeLeft(secondsLeft);
	}, 1000);

}

function startTimer() {
	const seconds = sessionLengthValue * 60;
	timer(seconds);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	timeLeft.textContent = display;
}

function resetTimer() {
	clearInterval(countdown);
	sessionLengthValue = 25;
	sessionLength.textContent = sessionLengthValue;
	timeLeft.textContent = `${sessionLengthValue}:00`;
}