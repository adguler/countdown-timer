// Set the countdown target date and time
const countdownToDate = new Date("Aug 26, 2024 23:59:59").getTime();

// Function to update the countdown every second and display it
const updateCountdown = () => {
    const now = new Date().getTime();
    const timeleft = countdownToDate - now;

    // Calculating the days, hours, minutes, and seconds left
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Generate and display the countdown string
    document.getElementById('countdownDisplay').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// Call updateCountdown immediately to initialize the display and set interval to update
updateCountdown();
setInterval(updateCountdown, 1000);
