import Swiper, { Autoplay, Pagination } from 'swiper';


new Swiper('.swiper', {
  modules: [Pagination, Autoplay],
  pagination: {
    clickable: true,
    type: 'bullets',
    el: '.hero__slider-pagination',
    bulletClass: 'hero__slider-pagination-bullet',
    bulletActiveClass: 'hero__slider-pagination-bullet_active',
  },
  autoplay: {
    delay: 5000,
  },
  speed: 1500,
  spaceBetween: 15,
  keyboard: true,
  rewind: true,
  simulateTouch: false,
});
