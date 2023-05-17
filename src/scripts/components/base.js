import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';
import { Select } from '../vendor/select/Select';
import { breakpointsMin } from '../utils/breakpoints';
import { initAcc } from '../modules/acc';
import { toggleMenu } from '../modules/burgerMenu';
import { openModal } from '../modules/modal';

import 'swiper/scss';

import 'fslightbox';

window.helpFunctions = {
  swiper: { Swiper, Navigation, Autoplay, Pagination },
  breakpointsMin,
  initAcc,
  toggleMenu,
  openModal,
};

new Select('.header-select');

window.helpFunctions.openModal();
window.helpFunctions.toggleMenu();
window.helpFunctions.initAcc();
