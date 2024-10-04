// // const data = {
// //     "name": inputedName,
// //     "logined": todayDate,
// //     "coin": 0,
// //     "log_claimed": false,
// //     "log_days": null,
// //     "farming": null,
// //     "claimed": false,
// //     "seed": [],
// //     "complete": [12390, 09873, 40738],
// //     "id": generateId
// // };

const taskData = [
    {
        title: "[code] what is ai?...",
        url: "https://youtu.be/MbQVXy0gBGk?si=AbxcftVj5KFLMx7r",
        id: "1000",
        icon: '<i class="fa-brands fa-youtube me"></i>',
        coins: 150,
        code: "AI"
    },
    {
        title: "[code]history of crypto..,",
        url: "https://youtu.be/fXM4BB81-Zk?si=PRh3xAvELg9wJO33",
        id: "1001",
        icon: '<i class="fa-brands fa-youtube me"></i>',
        coins: 150,
        code: "HISTORY"
    },
    {
        title: "[code]what is crypto...,",
        url: "https://youtu.be/k6jOKRp6Nh0?si=si5gjIcmA7QwIIJ_",
        id: "1003",
        icon: '<i class="fa-brands fa-youtube me"></i>',
        coins: 150,
        code: "OKAY"
    },
    {
        title: "[code]History of crypto...,",
        url: "https://t.me/web_ms/4",
        id: "1004",
        icon: '<i class="fa-brands fa-telegram me"></i>',
        coins: 150,
        code: "HISTORY"
    },
    {
        title: "[code]what is ai...,",
        url: "https://t.me/web_ms/5",
        id: "1005",
        icon: '<i class="fa-brands fa-telegram me"></i>',
        coins: 150,
        code: "AI"
    },
    {
        title: "[code]what is crypto...,",
        url: "https://t.me/web_ms/6",
        id: "1006",
        icon: '<i class="fa-brands fa-telegram me"></i>',
        coins: 150,
        code: "OKAY"
    },
    {
        title: "[code]Bad sides of media...,",
        url: "https://youtu.be/qunPplPqC4A?si=cl9rOu2yZ39gEgsV",
        id: "1012",
        icon: '<i class="fa-brands fa-youtube me"></i>',
        coins: 150,
        code: "BAD"
    }
];
const dtaskData = [
    {
        title: "Subscribe youtube channel",
        url: "https://youtube.com/@web-mining-space?si=alPUjL6ZdBeQ-08c",
        id: "1007",
        icon: '<i class="fa-brands fa-youtube me"></i>',
        coins: 250,
        code: "AI"
    },
    {
        title: "Subscribe telegram channel",
        url: "https://t.me/web_ms",
        id: "1011",
        icon: '<i class="fa-brands fa-youtube me"></i>',
        coins: 250,
        code: "AI"
    },
    {
        title: "what is ai?...",
        url: "https://youtu.be/MbQVXy0gBGk?si=AbxcftVj5KFLMx7r",
        id: "1008",
        icon: '<i class="fa-brands fa-youtube me"></i>',
        coins: 75,
        code: "AI"
    },
    {
        title: "history of crypto..,",
        url: "https://youtu.be/fXM4BB81-Zk?si=PRh3xAvELg9wJO33",
        id: "1009",
        icon: '<i class="fa-brands fa-youtube me"></i>',
        coins: 75,
        code: "HISTORY"
    },
    {
        title: "what is crypto...,",
        url: "https://youtu.be/k6jOKRp6Nh0?si=si5gjIcmA7QwIIJ_",
        id: "1010",
        icon: '<i class="fa-brands fa-youtube me"></i>',
        coins: 75,
        code: "OKAY"
    },
    {
        title: "Bad sides of social media...,",
        url: "https://youtu.be/k6jOKRp6Nh0?si=si5gjIcmA7QwIIJ_",
        id: "1013",
        icon: '<i class="fa-brands fa-youtube me"></i>',
        coins: 75,
        code: "OKAY"
    }
];


// Retrieve workLine from localStorage
// Retrieve workLine from localStorage
let workLine = JSON.parse(localStorage.getItem('bit_plus'));

if (!workLine) {
    // Redirect to index.html if workLine does not exist
    window.location.href = "index.html";
}
else{
    document.getElementById('name').innerHTML = `<i class="fa-solid fa-circle-user"></i> ${workLine.name}`;
    document.getElementById('textToCopy').innerHTML = workLine.id;
}
dtaskData.forEach((item) => {
    // Create the task card
    const taskCard = document.createElement('div');
    taskCard.classList.add('task_card');

    // Create the link and icon
    const cardLinkDiv = document.createElement('div');
    cardLinkDiv.classList.add('card_c_i_div');

    const isCompleted = workLine.complete.includes(item.id);
    const anchor = document.createElement('a');
    // anchor.classList.add('color2');
    anchor.style.cursor = 'pointer';
    anchor.href = item.url;
    // anchor.style.textDecoration = 'none'; // Remove default underline for link

    if (isCompleted) {
        anchor.innerHTML = `${item.icon} ${item.title}`;
        anchor.style.pointerEvents = 'none'; // Disable click if completed
    } else {
        anchor.innerHTML = `${item.icon} ${item.title}`;
        anchor.setAttribute('onclick', `dhandleTaskClick('${item.id}', ${item.coins})`);
    }

    cardLinkDiv.appendChild(anchor);

    // Create the coins display only if not completed
    taskCard.appendChild(cardLinkDiv);
    if (!isCompleted) {
        const cardCoinsDiv = document.createElement('div');
        cardCoinsDiv.classList.add('card_c_i_div');

        const coinsParagraph = document.createElement('p');
        // coinsParagraph.classList.add('color');
        // coinsParagraph.style = "color: #00aaff;";
        coinsParagraph.innerHTML = `${item.coins} <i class="fa-brands fa-gg-circle"></i>`;
        cardCoinsDiv.appendChild(coinsParagraph);

        taskCard.appendChild(cardCoinsDiv); // Append only if not completed
    } else {
        const cardCoinsDiv = document.createElement('div');
        cardCoinsDiv.classList.add('card_c_i_div');

        const coinsParagraph = document.createElement('p');
        coinsParagraph.classList.add('color');
        // coinsParagraph.style = "color: #00aaff;";
        coinsParagraph.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #7ed957;"></i>`;
        cardCoinsDiv.appendChild(coinsParagraph);
        taskCard.appendChild(cardCoinsDiv);
    }

    document.getElementById('taskCardsContainer').appendChild(taskCard);
});

function dhandleTaskClick(id, coins) {
    // Fetch workLine from localStorage
    let workLine = JSON.parse(localStorage.getItem('bit_plus'));

    // Check if the task is already completed
    if (!workLine.complete.includes(id)) {
        // Add the task ID to the completed tasks
        workLine.complete.push(id);

        // Add the coins to the user's total
        workLine.coin += coins;

        // Save the updated workLine back to localStorage
        localStorage.setItem('bit_plus', JSON.stringify(workLine));
    }
}


// Loop through each item in taskData array
taskData.forEach((item) => {
    // Create the task card
    const taskCard = document.createElement('div');
    taskCard.classList.add('task_card');
    taskCard.innerHTML = ``;
    // Create the link and icon
    const cardLinkDiv = document.createElement('div');
    cardLinkDiv.classList.add('card_c_i_div');

    const isCompleted = workLine.complete.includes(item.id);
    const button = document.createElement('button');
    // button.classList.add('color2');
    button.style.cursor = 'pointer';

    if (isCompleted) {
        button.disabled = true;
        button.innerHTML = `${item.icon} ${item.title}`;
    } else {
        button.innerHTML = `${item.icon} ${item.title}`;
        button.setAttribute('onclick', `handleTaskClick('${item.id}')`);
    }

    cardLinkDiv.appendChild(button);

    // Create the coins display only if not completed
    taskCard.appendChild(cardLinkDiv);
    if (!isCompleted) {
        const cardCoinsDiv = document.createElement('div');
        cardCoinsDiv.classList.add('card_c_i_div');

        const coinsParagraph = document.createElement('p');
        // coinsParagraph.classList.add('color');
        // coinsParagraph.style = "color: #00aaff;";
        coinsParagraph.innerHTML = `${item.coins} <i class="fa-brands fa-gg-circle"></i>`;
        cardCoinsDiv.appendChild(coinsParagraph);

        taskCard.appendChild(cardCoinsDiv); // Append only if not completed
    }else{
        const cardCoinsDiv = document.createElement('div');
        cardCoinsDiv.classList.add('card_c_i_div');

        const coinsParagraph = document.createElement('p');
        // coinsParagraph.classList.add('color');
        // coinsParagraph.style = "color: #00aaff;";
        coinsParagraph.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #7ed957;"></i>`;
        cardCoinsDiv.appendChild(coinsParagraph);
        taskCard.appendChild(cardCoinsDiv); // Append only if not completed
    }
    document.getElementById('taskCardsContainer').appendChild(taskCard);
});


// Example function to handle the button click
function handleTaskClick(id) {
    // Check if bit_plus exists in local storage
    const Task = taskData.find(task => task.id === id);
    let workLine = JSON.parse(localStorage.getItem('bit_plus'));
    // alert(id); // Show clicked ID
    // alert(Task); // Check if Task is found

    if (Task) {
        // Get the popup element
        const isSeeded = workLine.seed.includes(id);
        // alert(isSeeded);
        const codePopup = document.getElementById('code_popup');
        codePopup.style.display = 'block';

        // Clear previous content and set new content
        if(isSeeded === false){
        codePopup.innerHTML = `
            <div class="popup-content">
                <p>First see the video or post and find the code, then paste it below!</p>
                <a href="${Task.url}" onclick="addsee('${Task.id}')">Click for video or post link --></a>
                <input type="text" placeholder="Enter the key!" id="keyInput" disabled>
                <a id="cant" href="${Task.url}" onclick="addsee('${Task.id}')">See the video or post</a>
                <button id="cancelBtn" onclick="cancel()"><i class="fa-solid fa-xmark"></i></button>
            </div>
        `;
        }else{
            codePopup.innerHTML = `
            <div class="popup-content">
                <p>First see the video or post and find the code, then paste it below!</p>
                <a href="${Task.url}">Click for video or post link --></a>
                <input type="text" placeholder="Enter the key!" id="keyInput">
                <button id="sendBtn" onclick="send('${Task.id}',document.getElementById('keyInput').value)">Send</button>
                <button id="cancelBtn" onclick="cancel()"><i class="fa-solid fa-xmark"></i></button>
            </div>
        `;  
        }
        // Attach event listeners to the buttons
        document.getElementById('sendBtn').addEventListener('click', function() {
            const key = document.getElementById('keyInput').value;
            // Handle the send action (you can add your logic here)
            console.log(`Key entered: ${key}`);
            cancel(); // Close the popup after sending
        });
    } else {
        console.error(`Task with ID ${id} not found.`);
    }
}

// Function to cancel and hide the popup
function cancel() {
    document.getElementById('code_popup').style.display = 'none';
}
function addsee(id) {
    // Check if bit_plus exists in local storage and initialize if not
    let workLine = JSON.parse(localStorage.getItem('bit_plus')) || { seed: [] };

    // Find the index of the existing ID in the seed array
    const index = workLine.seed.indexOf(id);

    if (index === -1) {
        // If the ID does not exist, push the new ID
        workLine.seed.push(id);
        console.log(`Task ID ${id} added to workLine.seed.`);
    } else {
        // If the ID exists, replace it with the new ID (optional: you can replace it with another given ID)
        // Here, we replace it with a new ID, for demonstration we keep it as the same ID
        // Replace `newId` with the ID you want to insert
        const newId = "newId"; // Replace this with the new ID you want to set
        workLine.seed[index] = newId; // Replace the existing ID
        console.log(`Task ID ${id} replaced with Task ID ${newId} in workLine.seed.`);
    }

    // Save the updated workLine back to local storage
    localStorage.setItem('bit_plus', JSON.stringify(workLine));
}

function send(id, inputed) {
    const Task = taskData.find(task => task.id === id);
    let workLine = JSON.parse(localStorage.getItem('bit_plus')) || { complete: [], coins: 0 }; // Ensure workLine is initialized

    if (inputed === '') {
        showElement(); // Ensure this function gives user feedback
        return; // Stop further execution
    }

    if (!Task) {
        alert(`Task with ID ${id} not found.`);
        return; // Stop if Task is not found
    }

    if (inputed === Task.code) {
        workLine.complete.push(Task.id);
        workLine.coin += Task.coins;
        localStorage.setItem('bit_plus', JSON.stringify(workLine));

        const element = document.getElementById('success');
        element.style.display = 'block';
        element.innerHTML = `
        <div class="success_text">
            <h3> <i class="fa-solid fa-circle-check"></i> You got ${Task.coins} coins </h3>
        </div>`;
        setTimeout(() => {
            element.style.display = 'none';
            window.location.reload();
        }, 1500);
    } else {
        const element = document.getElementById('errorpop');
        element.style.display = 'block';
        element.innerHTML = `
            <div class="errorpop_text">
                <h3><i class="fa-solid fa-circle-exclamation"></i> Key not matched!</h3>
            </div>`;
        setTimeout(() => {
            element.style.display = 'none';
        }, 1500);
    }
}


function showElement() {
    const element = document.getElementById('errorpop');
    element.style.display = 'block';
    element.innerHTML = `
        <div class="errorpop_text">
            <h3><i class="fa-solid fa-triangle-exclamation"></i> No data passed!</h3>
        </div>`;
    setTimeout(() => {
        element.style.display = 'none';
    }, 1500);
}
// Function to check login status on page load
window.onload = function() {
    const todayDate = new Date().toLocaleDateString();

    if (workLine.logined === todayDate && !workLine.log_claimed) {
        // Show the login button
        document.getElementById('login').style.display = 'block';
        document.getElementById('logined').style.display = 'none';
    } else {
        // Show the logined button
        document.getElementById('login').style.display = 'none';
        document.getElementById('logined').style.display = 'block';
    }
};

function claimLogin() {
    // Logic for consecutive days login
    let coinBonus = 0;

    // Initialize log_days if it's not set or greater than 14
    if (!workLine.log_days || workLine.log_days >= 14) {
        workLine.log_days = 1;
    } else {
        workLine.log_days += 1;
    }

    // Add coins based on log_days
    coinBonus = 25 * workLine.log_days;
    workLine.coin += coinBonus;

    // Update the log_claimed status
    workLine.log_claimed = true;

    // Save updated workLine to localStorage
    localStorage.setItem('bit_plus', JSON.stringify(workLine));

    // Hide the login button and show the logined button
    document.getElementById('login').style.display = 'none';
    document.getElementById('logined').style.display = 'block';

    // Show popup with the coins claimed
    document.getElementById('popup').innerHTML = `
        <div class="pop_text">
            <h4>You claimed ${coinBonus} coins</h4>
            <button class="okay" onclick="document.getElementById('popup').style.display='none'">Okay</button>
        </div>`;
    document.getElementById('popup').style.display = 'flex';
}
function copyBITPLUS(){
    const textToCopy = 'https://t.me/bit_plus_webms_bot';
    navigator.clipboard.writeText(textToCopy)
    document.getElementById('popup').innerHTML = `
        <div class="pop_text">
            <h4>Link is copied!</h4>
            <button class="okay" onclick="document.getElementById('popup').style.display='none'">Okay</button>
        </div>`;
    document.getElementById('popup').style.display = 'flex';
}
