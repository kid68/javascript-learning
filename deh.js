let seconds = time % 60;

do {
	countdownEl.innerHTML = '${minutes} :${seconds}'
} while (condition);

time --;
countdownEl.innerHTML = '${minutes} :${seconds}'