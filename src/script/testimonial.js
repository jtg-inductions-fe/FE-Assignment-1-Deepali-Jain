import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

/**
 * Initializes a Splide slider for testimonials with fade effect and custom classes.
 * The slider will rewind after the last slide and has custom pagination and arrow classes.
 * The slider is mounted to the element with the class 'splide'.
 */
var splide = new Splide('.splide', {
    type: 'fade',
    rewind: true,
    classes: {
        pagination: 'testimonial__pagination',
        page: 'testimonial__pagination__page',
        arrows: 'testimonial__arrows',
        arrow: 'testimonial__arrow',
        prev: 'testimonial__arrows__prev',
        next: 'testimonial__arrows__next',
    },
});

/**
 * Mounts the Splide slider to apply the defined settings and styles.
 */
splide.mount();
