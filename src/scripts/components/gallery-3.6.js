import Swiper, { Autoplay} from 'swiper';

new Swiper('.swiper', {
  modules: [Autoplay],
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  spaceBetween: 10,
  keyboard: true,
  rewind: true,
  simulateTouch: false,
  slidesPerView: 1.113,
});
