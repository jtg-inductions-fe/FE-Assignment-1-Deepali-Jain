// Import the main SCSS file for styling
import '../styles/main.scss';

/**
 * Hamburger icon element for opening the navigation menu
 */
const hamIcon = document.getElementById('js-hamIcon');

/**
 * Cross icon element for closing the navigation menu
 */
const crossIcon = document.getElementById('js-crossIcon');

/**
 * Navigation links container element (sidebar)
 */
const navLinkContainer = document.getElementById('js-navLinkContainer');

/**
 * Opens the navigation menu by adding the 'open' class to the container.
 * Triggered when the hamburger icon is clicked.
 */
hamIcon.addEventListener('click', () => {
    navLinkContainer.classList.add('nav--open');
});

/**
 * Closes the navigation menu by removing the 'open' class from the container.
 * Triggered when the cross icon is clicked.
 */
crossIcon.addEventListener('click', () => {
    navLinkContainer.classList.remove('nav--open');
});

/**
 * Closes the sidebar if it's open and the screen is resized.
 * Useful for hiding the mobile menu when resizing to a larger view.
 */
function closeSidebar() {
    if (navLinkContainer.classList.contains('nav--open')) {
        navLinkContainer.classList.remove('nav--open');
    }
}

/**
 * Calls closeSidebar() whenever the window is resized.
 */
window.addEventListener('resize', closeSidebar);
