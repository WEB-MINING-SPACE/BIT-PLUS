
    window.onload = function() {
    let workLine = localStorage.getItem('bit_plus');
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  
  if (!isChrome) {
    // If not Chrome, redirect to the Chrome download page
    window.location.href = 'https://www.google.com/chrome/';
  }

    if (workLine) {
        workLine = JSON.parse(workLine);

        // Display the user info
        document.getElementById('name').innerHTML = `<i class="fa-solid fa-circle-user"></i> ${workLine.name}`;
        document.getElementById('textToCopy').innerHTML = workLine.id;
        document.getElementById('coin_qty').innerHTML = `${workLine.coin} <i class="fa-brands fa-gg-circle"></i> `;

        if (workLine.farming) {
            // If farming has started, show the farming button and update the timer
            document.getElementById('farming').style.display = 'block';
            document.getElementById('start_farming').style.display = 'none';
            updateFarmingTime(workLine.farming);
        } else {
            // If no farming has started, show the start farming button
            document.getElementById('start_farming').style.display = 'block';
        }
    } else {
        // If no bit_plus exists in localStorage, show the welcome screen
        document.getElementById('welcome').style.display = 'block';
    }
};

function startFarming() {
    let workLine = localStorage.getItem('bit_plus');

    if (workLine) {
        workLine = JSON.parse(workLine);
        workLine.farming = Date.now();

        localStorage.setItem('bit_plus', JSON.stringify(workLine));

        document.getElementById('start_farming').style.display = 'none';
        document.getElementById('farming').style.display = 'block';

        updateFarmingTime(workLine.farming);
    }
}

function updateFarmingTime(farmingTime) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - farmingTime;
    const elapsedHours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const elapsedMinutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const elapsedSeconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    // Calculate the remaining time until 3 hours
    const remainingTime = 3 * 60 * 60 * 1000 - elapsedTime;
    const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the timer on the farming button
    document.getElementById('farming_time').innerHTML = `${remainingHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

    // Check if more than 3 hours have passed
    if (elapsedHours >= 3) {
        // Show claim button and hide the farming button
        document.getElementById('claim_coin').style.display = 'block';
        document.getElementById('farming').style.display = 'none';
    } else {
        // Keep updating the farming time every second
        setTimeout(() => updateFarmingTime(farmingTime), 1000);
    }
}

function claimCoin() {
    let workLine = localStorage.getItem('bit_plus');

    if (workLine) {
        workLine = JSON.parse(workLine);

        // Add coins and reset farming state
        workLine.coin += 72;
        workLine.farming = null;

        localStorage.setItem('bit_plus', JSON.stringify(workLine));

        // alert(`You claimed 72 coins! Total coins: ${workLine.coin}`);

        // Show the start farming button again
        document.getElementById('coin_qty').innerHTML = `<i class="fa-brands fa-gg-circle"></i> ${workLine.coin}`;
        document.getElementById('claim_coin').style.display = 'none';
        document.getElementById('start_farming').style.display = 'block';
    }
}
function savename() {
            // Get the entered name
            const inputedName = document.getElementById('inputed_name').value || "user";

            // Generate today's date in a readable format
            const todayDate = new Date().toLocaleDateString();

            // Generate a random 8-digit ID
            const generateId = Math.floor(10000000 + Math.random() * 90000000);

            // Create the JSON object
            const data = {
                "name": inputedName,
                "logined": todayDate,
                "coin": 0,
                "log_claimed": false,
                "log_days": null,
                "farming": null,
                "claimed": false,
                "seed": [],
                "complete": [],
                "id": generateId
            };

            // Save the JSON object in localStorage as 'bit_plus'
            localStorage.setItem('bit_plus', JSON.stringify(data));

            // Hide the welcome container
            document.getElementById('welcome').style.display = 'none';

            // Show the user's name in the specified element
            document.getElementById('name').innerHTML = `<i class="fa-solid fa-circle-user"></i> ${inputedName}`;
            document.getElementById('textToCopy').innerHTML = generateId;
            window.location.reload();
        }
