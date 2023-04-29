import Swiper, { Navigation } from 'swiper';

new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    prevEl: '.blog__slider-btn_prev',
    nextEl: '.blog__slider-btn_next',
  },
  speed: 1500,
  spaceBetween: 12,
  keyboard: true,
  rewind: true,
  simulateTouch: false,
});
