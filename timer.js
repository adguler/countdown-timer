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
    const countdownString = `Until the transition of power: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    document.getElementById('countdownDisplay').innerHTML = countdownString;
    return countdownString; // Return the string for use in the download
};

// Call updateCountdown immediately to initialize the display and set interval to update
updateCountdown();
setInterval(updateCountdown, 1000);

// Function to generate the download link
const generateDownloadLink = () => {
    const countdownContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Countdown Timer</title>
        <script>
            // Set the countdown target date and time
            const countdownToDate = new Date("Aug 26, 2024 23:59:59").getTime();

            // Function to update the countdown every second
            const updateCountdown = () => {
                const now = new Date().getTime();
                const timeleft = countdownToDate - now;

                // Calculating the days, hours, minutes, and seconds left
                const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

                // Display the countdown on the webpage
                document.body.innerHTML = '<p>Until the transition of power: ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's</p>';
            };

            // Update the countdown every second
            setInterval(updateCountdown, 1000);
        </script>
    </head>
    <body>
    </body>
    </html>`;

    const blob = new Blob([countdownContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    document.getElementById('downloadLink').href = url;
    document.getElementById('downloadLink').download = 'CountdownTimer.html';
};

// Generate download link and attach it to the window load event
window.onload = generateDownloadLink;