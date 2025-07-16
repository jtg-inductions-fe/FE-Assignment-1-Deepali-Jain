import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

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
splide.mount();
