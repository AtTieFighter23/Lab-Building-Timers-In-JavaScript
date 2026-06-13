/**
 * Countdown Timer
 * Logs the remaining seconds (just the number) every second
 * and stops when it reaches 0.
 */
function countdownTimer(seconds) {
    if (typeof seconds !== 'number' || seconds <= 0) {
        return null;
    }

    let timeLeft = seconds;

    const timerId = setInterval(() => {
        console.log(timeLeft);        // ← Test expects just the number

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerId);
            console.log("Countdown finished!");
        }
    }, 1000);

    return timerId;
}

module.exports = { countdownTimer };