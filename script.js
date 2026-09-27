// Digital Clock

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add 0 before single digit numbers
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;


    // Display Date

    const date = now.toDateString();

    document.getElementById("date").textContent = date;
}


// Update clock every 1 second

setInterval(updateClock, 1000);

// Run immediately
updateClock();


// Countdown Timer

function updateCountdown() {

    const now = new Date();

    // New Year 2027
    const targetDate = new Date("January 1, 2027 00:00:00");

    const difference = targetDate - now;

    if (difference <= 0) {

        document.getElementById("countdown").textContent =
            "Happy New Year! 🎉";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("countdown").textContent =
        `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
}


// Update countdown every second

setInterval(updateCountdown, 1000);

updateCountdown();