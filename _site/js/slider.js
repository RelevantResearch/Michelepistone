// Function to re-trigger animations on window resize
function triggerAnimation() {
    const lines = document.querySelectorAll('span.line-1, span.line-2, span.line-3, span.line-4, span.line-5, span.line-6');

    // Remove the animation class temporarily to restart the animation
    lines.forEach(line => {
        line.style.animation = 'none'; // Remove animation
        // Force reflow
        line.offsetHeight; // This line triggers reflow
        // Re-apply the animation
        line.style.animation = ''; // Reset animation
    });
}

// Add event listener for window resize
window.addEventListener('resize', triggerAnimation);
