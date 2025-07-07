import '../styles/main.scss';
let hamIcon = document.getElementById('hamIcon');
let crossIcon = document.getElementById('crossIcon');
const navBtns = document.querySelector('.nav-btns');
const hamMenu = document.getElementById('hamMenu');
const navParent = document.querySelector('.nav-parent');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li a');
const navButtons = document.querySelectorAll('.nav-btns button');
hamIcon.addEventListener('click', () => {
    hamMenu.style.width = window.innerWidth / 2 + 'px';
});
crossIcon.addEventListener('click', () => {
    hamMenu.style.width = '0';
});

function handleNavBtns() {
    const width = window.innerWidth;
    if (hamMenu.contains(navMenu)) {
        hamMenu.removeChild(navMenu);
    }
    if (hamMenu.contains(navBtns)) {
        hamMenu.removeChild(navBtns);
    }
    if (navParent.contains(navMenu)) {
        navParent.removeChild(navMenu);
    }
    if (navParent.contains(navBtns)) {
        navParent.removeChild(navBtns);
    }
    if (width <= 480) {
        // mobile
        if (!hamMenu.contains(navMenu)) {
            hamMenu.appendChild(navMenu);
        }
        if (!hamMenu.contains(navBtns)) {
            hamMenu.appendChild(navBtns);
        }
    } else if (width <= 1024) {
        // tablet
        if (!navParent.contains(navBtns)) {
            navParent.appendChild(navBtns);
        }
        if (!hamMenu.contains(navMenu)) {
            hamMenu.appendChild(navMenu);
        }
    } else {
        // desktop
        if (!navParent.contains(navMenu)) {
            navParent.appendChild(navMenu);
        }
        if (!navParent.contains(navBtns)) {
            navParent.appendChild(navBtns);
        }
    }
}
window.addEventListener('resize', handleNavBtns);
window.addEventListener('DOMContentLoaded', handleNavBtns);
navLinks.forEach((link, index) => {
    link.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowRight' || e.key == 'ArrowDown') {
            e.preventDefault();
            link.classList.remove('current');
            const nextIndex = (index + 1) % navLinks.length;
            navLinks[nextIndex].focus();
            navLinks[nextIndex].classList.add('current');
        }
        if (e.key == 'ArrowLeft' || e.key == 'ArrowUp') {
            e.preventDefault();
            link.classList.remove('current');
            const prevIndex = (index - 1 + navLinks.length) % navLinks.length;
            navLinks[prevIndex].focus();
            navLinks[prevIndex].classList.add('current');
        }
    });
});
navButtons.forEach((link, index) => {
    link.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowRight') {
            e.preventDefault();
            link.classList.remove('current');
            const nextIndex = (index + 1) % navButtons.length;
            navButtons[nextIndex].focus();
            navButtons[nextIndex].classList.add('current');
        }
        if (e.key == 'ArrowLeft') {
            e.preventDefault();
            link.classList.remove('current');
            const prevIndex =
                (index - 1 + navButtons.length) % navButtons.length;
            navButtons[prevIndex].focus();
            navButtons[prevIndex].classList.add('current');
        }
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
