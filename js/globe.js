
document.getElementById('copyButton').addEventListener('click', function() {
    // Get the text from the <p> element (or any element you're copying from)
    const textToCopy = document.getElementById('textToCopy').innerText;

    // Create a temporary textarea element to copy the text
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Get the copy message element
    const copyMessage = document.getElementById('copyMessage');
    
    // Show the "Copied!" message
    copyMessage.style.display = 'block';

    // Hide the message after 2 seconds
    setTimeout(function() {
        copyMessage.style.display = 'none';
    }, 2000);
});


// Get all accordion headers

