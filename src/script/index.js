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
 * Newsletter button element for subscribing to the newsletter
 */
const newsletterForm = document.getElementById('js-newsletterForm');

/**
 * Navigation links for closing the sidebar when clicked
 */
const navLinks = document.querySelectorAll('.nav__list-item a');

/**
 * Opens the navigation menu by adding the 'open' class to the container.
 * Triggered when the hamburger icon is clicked.
 * This also prevents body scrolling while the menu is open.
 */
hamIcon.addEventListener('click', () => {
    navLinkContainer.classList.add('nav--open');
    document.body.classList.add('no-scroll');
});

/**
 * Closes the navigation menu by removing the 'open' class from the container.
 * Triggered when the cross icon is clicked.
 * This also allows body scrolling again when the menu is closed.
 */
crossIcon.addEventListener('click', () => {
    navLinkContainer.classList.remove('nav--open');
    document.body.classList.remove('no-scroll');
});

/**
 * Handles the newsletter subscription form submission.
 * Prevents the default form submission behavior and displays a thank you message.
 */
newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
});

/**
 * Closes the sidebar if it's open and the screen is resized.
 * Useful for hiding the mobile menu when resizing to a larger view.
 */
function closeSidebar() {
    if (navLinkContainer.classList.contains('nav--open')) {
        navLinkContainer.classList.remove('nav--open');
    }
    if (document.body.classList.contains('no-scroll')) {
        document.body.classList.remove('no-scroll');
    }
}

/**
 * Adds click event listeners to each navigation link to close the sidebar
 * when a link is clicked. This ensures the sidebar closes after navigation on mobile devices.
 */
navLinks.forEach((link) => {
    link.addEventListener('click', closeSidebar);
});

/**
 * Calls closeSidebar() whenever the window is resized.
 */
window.addEventListener('resize', closeSidebar);
