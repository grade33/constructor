import Swiper, { Navigation } from 'swiper';

new Swiper('.blog-3_1 .swiper', {
  modules: [Navigation],
  navigation: {
    prevEl: '.blog-3__slider-btn_prev',
    nextEl: '.blog-3__slider-btn_next',
  },
  speed: 1500,
  spaceBetween: 12,
  keyboard: true,
  rewind: true,
  simulateTouch: false,
});
