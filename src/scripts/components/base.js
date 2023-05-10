import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';
import { Select } from '../vendor/select/Select';
import { breakpointsMin } from '../utils/breakpoints';
import { initAcc } from '../modules/acc';
import { toggleMenu } from '../modules/burgerMenu';
import { openModal } from '../modules/modal';

window.helpFunctions = {
  swiper: { Swiper, Navigation, Autoplay, Pagination },
  Select,
  breakpointsMin,
  initAcc,
  toggleMenu,
  openModal,
};
