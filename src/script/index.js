import '../styles/main.scss';

const hamIcon = document.getElementById('js-hamIcon');
const crossIcon = document.getElementById('crossIcon');
const navLinks = document.getElementById('js-navLinks');

hamIcon.addEventListener('click', () => {
    navLinks.classList.add('open');
});

crossIcon.addEventListener('click', () => {
    navLinks.classList.remove('open');
});
