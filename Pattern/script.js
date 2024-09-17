document.addEventListener('DOMContentLoaded', () => {
    const lanterns = document.querySelectorAll('.lantern');

    lanterns.forEach(lantern => {
        lantern.style.animation = `floatLantern 5s infinite ease-in-out ${Math.random() * 2}s`;
    });
});

/** ///////////////////////////////////// */
document.addEventListener('DOMContentLoaded', () => {
    const sky = document.querySelector('.sky');
    const numStars = 200; // Number of stars
    const colors = ['#FF69B4', '#8A2BE2', '#00FF00', '#1E90FF', '#FFFF00', '#ffffff'];
    for (let i = 0; i < numStars; i++) {  
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Randomize star size, position, and opacity
        const size = Math.random() * 3 + 1; // Star size between 1px and 4px
        const topPos = Math.random() * 100; // Random top position (in percentage)
        const leftPos = Math.random() * 100; // Random left position (in percentage)
        const opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
        const color = colors[Math.floor(Math.random() * colors.length)];
        // Apply styles to the star
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${topPos}vh`;
        star.style.left = `${leftPos}vw`;
        star.style.opacity = opacity;
        star.style.backgroundColor = color;
        // Append the star to the sky
        sky.appendChild(star);
    }
});
// Function to add bouncing animation to tassels
// Function to add bounce animation to tassels
// Function to add swinging animation to ropes
// Function to apply a random initial rotation to each tassel
// Function to apply a random initial rotation to each tassel
function applyRandomRotation() {
    const tassels = document.querySelectorAll('.tassel');

    tassels.forEach(tassel => {
        const randomDegree = Math.floor(Math.random()); // Random degree between 0 and 359
        tassel.style.transform += `rotate(${randomDegree}deg)`;
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    applyRandomRotation();
});
