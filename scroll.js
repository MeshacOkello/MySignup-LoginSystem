// script.js

// Get the button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function scrollToTop() {
    // Set the duration of the scroll animation in milliseconds
    var duration = 1000; // 1000 milliseconds = 1 second

    var start = window.pageYOffset; // current scroll position
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    // Animation function
    function scrollAnimation() {
        var currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        var timeElapsed = currentTime - startTime;

        // Calculate the next position using easeInOutQuad easing function
        var newPos = easeInOutQuad(timeElapsed, start, -start, duration);

        // Scroll to the new position
        window.scrollTo(0, newPos);

        // Continue the animation if the duration hasn't elapsed
        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    // Start the animation
    requestAnimationFrame(scrollAnimation);
}

// Easing function for smooth scrolling
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}





