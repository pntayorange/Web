document.addEventListener("DOMContentLoaded", function() {
    // Function to create fireworks
    function createFirework(x, y) {
        const colors = ['#ff6f61', '#ffeb3b', '#4caf50', '#388e3c', '#f44336'];
        for (let i = 0; i < 10; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.left = `${x}px`;
            firework.style.top = `${y}px`;
            firework.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.5 + 0.5})`;
            firework.style.animationDelay = `${Math.random() * 1}s`;

            document.getElementById('fireworks').appendChild(firework);

            // Remove firework after animation ends
            setTimeout(() => {
                firework.remove();
            }, 5000);
        }
    }

    // Create fireworks at random positions
    function triggerFireworks() {
        const fireworksContainer = document.getElementById('fireworks');
        const containerWidth = fireworksContainer.offsetWidth;
        const containerHeight = fireworksContainer.offsetHeight;

        for (let i = 0; i < 10; i++) { // Reduce the number of fireworks per trigger
            const x = Math.random() * containerWidth;
            const y = Math.random() * containerHeight;
            createFirework(x, y);
        }
    }

    // Trigger fireworks continuously
    setInterval(triggerFireworks, 2000); // Trigger fireworks every 2 seconds

    // Optional: Add a trigger for fireworks on click
    document.body.addEventListener('click', function(event) {
        createFirework(event.clientX, event.clientY);
    });
});

