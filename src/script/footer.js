const accordionToggles = document.querySelectorAll('.footer__accordion-toggle');

function toggleAccordion() {
    accordionToggles.forEach((element) => {
        element.addEventListener('click', () => {
            const accordionParent = element.closest('.footer__accordion');
            accordionParent.classList.toggle('active');
        });
    });
}

toggleAccordion();
