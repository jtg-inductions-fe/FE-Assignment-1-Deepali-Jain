// Import the main SCSS file for styling
import '../styles/main.scss';

// Get references to the DOM elements by their IDs
const hamIcon = document.getElementById('js-hamIcon'); // Hamburger icon (menu open)
const crossIcon = document.getElementById('js-crossIcon'); // Cross icon (menu close)
const navLinkContainer = document.getElementById('js-navLinkContainer'); // Navigation links container

// Add event listener to hamburger icon to open the navigation menu
hamIcon.addEventListener('click', () => {
    navLinkContainer.classList.add('open'); // Adds 'open' class to show nav links
});

// Add event listener to cross icon to close the navigation menu
crossIcon.addEventListener('click', () => {
    navLinkContainer.classList.remove('open'); // Removes 'open' class to hide nav links
});

// Function to close sidebar if its open and the screen width exceeds 1440px
function closeSidebar() {
    if (window.innerWidth >= 1440) {
        if (navLinkContainer.classList.contains('open')) {
            navLinkContainer.classList.remove('open'); // Removes 'open' class to close the sidebar
        }
    }
}

// Function closeSidebar() gets called whenever screen is resized
window.addEventListener('resize', closeSidebar);
