import Swiper, { Autoplay, Navigation } from 'swiper';

new Swiper('.swiper', {
  modules: [Navigation, Autoplay],
  navigation: {
    prevEl: '.hero__slider-btn_prev',
    nextEl: '.hero__slider-btn_next',
  },
  // autoplay: {
  //   delay: 5000,
  // },
  speed: 1500,
  spaceBetween: 15,
  keyboard: true,
  rewind: true,
  simulateTouch: false,
});
