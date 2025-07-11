import '../styles/main.scss';
const hamIcon = document.getElementById('hamIcon');
const crossIcon = document.getElementById('crossIcon');
const navBtns = document.querySelector('.nav__buttons');
const hamMenu = document.getElementById('hamMenu');
const navParent = document.querySelector('.nav__container');
const navMenu = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links li a');
const navButtons = document.querySelectorAll('.nav__buttons button');
hamIcon.addEventListener('click', () => {
    hamMenu.style.width = `${window.innerWidth / 2}px`;
});
crossIcon.addEventListener('click', () => {
    hamMenu.style.width = '0';
});
const breakpoints = {
    mobile: 480,
    tablet: 1024,
};
function handleNavBtns() {
    const width = window.innerWidth;
    [navMenu, navBtns].forEach((element) => {
        if (element.parentElement) {
            element.parentElement.removeChild(element);
        }
    });
    if (width <= breakpoints.mobile) {
        // mobile

        hamMenu.appendChild(navMenu);

        hamMenu.appendChild(navBtns);
    } else if (width <= breakpoints.tablet) {
        // tablet
        navParent.appendChild(navBtns);

        hamMenu.appendChild(navMenu);
    } else {
        // desktop
        navParent.appendChild(navMenu);

        navParent.appendChild(navBtns);
    }
}
window.addEventListener('resize', handleNavBtns);
window.addEventListener('DOMContentLoaded', handleNavBtns);

function handleKeyboardNavigation(elements, event, index) {
    const { key } = event;
    const isForward = key === 'ArrowRight' || key === 'ArrowDown';
    const isBackward = key === 'ArrowLeft' || key === 'ArrowUp';

    if (!isForward && !isBackward) return;

    event.preventDefault();
    elements[index].classList.remove('current');
    let nextIndex;
    if (isForward) {
        nextIndex = (index + 1) % elements.length;
    } else {
        nextIndex = (index - 1 + elements.length) % elements.length;
    }

    elements[nextIndex].focus();
    elements[nextIndex].classList.add('current');
}
navLinks.forEach((link, index) => {
    link.addEventListener('keydown', (e) => {
        handleKeyboardNavigation(navLinks, e, index);
    });
});
navButtons.forEach((link, index) => {
    link.addEventListener('keydown', (e) => {
        handleKeyboardNavigation(navButtons, e, index);
    });
});
hamIcon.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        hamIcon.click();
    }
});
crossIcon.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        crossIcon.click();
    }
});
