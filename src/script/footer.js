/**
 * Footer JavaScript for handling accordion functionality
 */
const accordionToggles = document.querySelectorAll('.footer__accordion-toggle');

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
 * Initializes the accordion functionality by adding click event listeners
 */
toggleAccordion();
