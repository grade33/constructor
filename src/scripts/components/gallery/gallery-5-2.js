new window.helpFunctions.swiper.Swiper('.gallery-5_2 .swiper', {
  modules: [window.helpFunctions.swiper.Navigation, window.helpFunctions.swiper.Autoplay],
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
    [window.helpFunctions.breakpointsMin.md]: {
      spaceBetween: 30,
      slidesPerView: 1.3,
    },
  },
});
