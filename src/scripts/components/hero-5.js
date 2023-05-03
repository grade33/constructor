import Swiper, { Autoplay, Navigation } from 'swiper';

new Swiper('.hero-5 .swiper', {
  modules: [Navigation, Autoplay],
  navigation: {
    prevEl: '.hero-5__slider-btn_prev',
    nextEl: '.hero-5__slider-btn_next',
  },
  autoplay: {
    delay: 5000,
  },
  speed: 1500,
  spaceBetween: 0,
  keyboard: true,
  rewind: true,
  simulateTouch: false,
});
