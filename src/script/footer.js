/**
 * Footer JavaScript for handling accordion functionality
 */
const accordionToggles = document.querySelectorAll('.footer__accordion-toggle');

/**
 * Breakpoints for responsive design
 */
const breakpoints = {
    lg: 1024,
};

/**
 * Toggles the active state of the accordion when a toggle element is clicked.
 * This adds or removes the 'active' class from the parent accordion element.
 */
function toggleAccordion() {
    accordionToggles.forEach((element) => {
        element.addEventListener('click', () => {
            const accordionParent = element.closest('.footer__accordion');
            accordionParent.classList.toggle('active');
        });
    });
}

/**
 * Disables the accordion toggles for larger screens by setting tabindex to -1.
 * This prevents keyboard navigation for the accordion toggles when the screen width is above the defined breakpoint
 */
function disableAccordionTab() {
    if (window.innerWidth >= breakpoints.lg) {
        accordionToggles.forEach((element) => {
            element.setAttribute('tabindex', '-1');
        });
    } else {
        accordionToggles.forEach((element) => {
            element.removeAttribute('tabindex');
        });
    }
}

/**
 * Initializes the accordion functionality by adding click event listeners
 */
toggleAccordion();

/**
 * Sets up event listeners to disable accordion toggles on page load and resize.
 */
window.addEventListener('DOMContentLoaded', disableAccordionTab);

/**
 * Disables accordion toggles on window resize to ensure responsiveness.
 */
window.addEventListener('resize', disableAccordionTab);
