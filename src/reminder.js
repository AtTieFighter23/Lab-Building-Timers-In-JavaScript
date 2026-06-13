/**
 * Delayed Reminder
 * Logs a message after a specified delay (in milliseconds)
 * and returns a Promise that resolves with the message.
 */
function delayedReminder(message, delayMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve(message);
        }, delayMs);
    });
}

module.exports = { delayedReminder };