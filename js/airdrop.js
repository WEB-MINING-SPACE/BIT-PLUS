const headers = document.querySelectorAll('.accordion-header');
let workLine = JSON.parse(localStorage.getItem('bit_plus'));

if (!workLine) {
    // Redirect to index.html if workLine does not exist
    window.location.href = "index.html";
}else{
    document.getElementById('name').innerHTML = `<i class="fa-solid fa-circle-user"></i> ${workLine.name}`;
    document.getElementById('textToCopy').innerHTML = workLine.id;
}
// Loop through each accordion header and add a click event listener
headers.forEach(header => {
    header.addEventListener('click', () => {
        // Toggle active class to show/hide content
        header.classList.toggle('active');
        
        // Get the associated accordion body
        const body = header.nextElementSibling;

        // Show or hide the accordion body
        if (header.classList.contains('active')) {
            body.style.display = 'block';
        } else {
            body.style.display = 'none';
        }
    });
});
// Set the date we're counting down to
const countDownDate = new Date("December 1, 2024 15:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);