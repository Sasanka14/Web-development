// Get the button element by its ID
const changeColorButton = document.getElementById('changeColorButton');

// Define an array of colors
const colors = ['#f4f4f9', '#ffcccb', '#d4edda', '#cce5ff', '#fff3cd'];

// Add a click event listener to the button
changeColorButton.addEventListener('click', () => {
    // Randomly select a color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
