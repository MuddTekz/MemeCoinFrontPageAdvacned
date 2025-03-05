// Get the navbar element
const navbar = document.querySelector('.navbar');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        navbar.classList.add('shrunk');
    } else {
        navbar.classList.remove('shrunk');
    }
});
