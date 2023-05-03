import Swiper, { Autoplay, Navigation } from 'swiper';

import { breakpointsMin } from '../utils/breakpoints';

new Swiper('.gallery-5_2 .swiper', {
  modules: [Navigation, Autoplay],
  navigation: {
    prevEl: '.gallery-5__slider-btn_prev',
    nextEl: '.gallery-5__slider-btn_next',
  },
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  slidesPerView: 1.112,
  spaceBetween: 12,
  keyboard: true,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    [breakpointsMin.md]: {
      spaceBetween: 30,
      slidesPerView: 1.3,
    },
  },
});
