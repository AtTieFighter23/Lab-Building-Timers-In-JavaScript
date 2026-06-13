let timerId = null;

/**
 * Starts a recurring timer that logs a message at regular intervals.
 */
function recurringTimer(message, intervalMs) {
    if (timerId) {
        clearInterval(timerId);
    }

    timerId = setInterval(() => {
        console.log(message);
    }, intervalMs);

    return timerId;
}

/**
 * Stops the recurring timer.
 */
function stopRecurringTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        console.log("Recurring timer stopped.");
    }
}

module.exports = { recurringTimer, stopRecurringTimer };