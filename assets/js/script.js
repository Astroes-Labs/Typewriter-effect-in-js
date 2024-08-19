const textElement = document.getElementById('typewriter-text');
const cursorElement = document.querySelector('.cursor');
const text = textElement.textContent;
const typingSpeed = 100; // milliseconds per character
const deletingSpeed = 50; // milliseconds per character
const delayBeforeDeleting = 1500; // milliseconds before starting to delete

let index = 0;
let isDeleting = false;

function updateCursorPosition() {
    // Get the width of the text content up to the current index
    const textWidth = textElement.scrollWidth;
    // Set the cursor's position directly in front of the last character
    cursorElement.style.left = `${textWidth}px`;
}

function type() {
    if (isDeleting) {
        textElement.textContent = text.substring(0, index--);
        updateCursorPosition(); // Update cursor position
        if (index < 0) {
            index = 0; // Reset index to 0 when deletion is complete
            isDeleting = false;
            //setTimeout(type, delayBeforeDeleting);
            type();
            // Wait before starting typing again
        } else {
            setTimeout(type, deletingSpeed); // Continue deleting
        }
    } else {
        textElement.textContent = text.substring(0, index++);
        updateCursorPosition(); // Update cursor position
        if (index > text.length) {
            index = text.length; // Ensure index does not exceed text length
            isDeleting = true;
            setTimeout(type, delayBeforeDeleting); // Wait before starting deletion
            //type();
        } else {
            setTimeout(type, typingSpeed); // Continue typing
        }
    }
}

// Start the typewriter effect
type();
