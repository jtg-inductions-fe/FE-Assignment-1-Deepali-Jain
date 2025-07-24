/**
 * Footer JavaScript for handling accordion functionality
 */
const accordionToggles = document.querySelectorAll(
    '.js-footer__accordion-toggle',
);

/**
 * Breakpoints for responsive design
 */
const breakpoints = {
    lg: 1024,
};

/**
 * Footer element
 */
const footer = document.getElementById('js-footer');

/**
 * Toggles the active state of the accordion when a toggle element is clicked.
 * This adds or removes the 'active' class from the parent accordion element.
 */
footer.addEventListener('click', (event) => {
    if (
        event.target.classList.contains('js-icon-circle-down') ||
        event.target.classList.contains('js-footer__accordion-toggle')
    ) {
        const accordionParent = event.target.closest('.js-footer__accordion');
        accordionParent.classList.toggle('active');
    }
});

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
 * Sets up event listeners to disable accordion toggles on page load and resize.
 */
window.addEventListener('DOMContentLoaded', disableAccordionTab);

/**
 * Disables accordion toggles on window resize to ensure responsiveness.
 */
window.addEventListener('resize', disableAccordionTab);
