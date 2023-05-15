import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';
import { Select } from '../vendor/select/Select';
import { breakpointsMin } from '../utils/breakpoints';
import { initAcc } from '../modules/acc';
import { toggleMenu } from '../modules/burgerMenu';
import { openModal } from '../modules/modal';

import 'swiper/css/bundle';


// Инициализируйте его с необходимыми настройками
import 'fslightbox';

window.helpFunctions = {
  swiper: { Swiper, Navigation, Autoplay, Pagination },
  Select,
  breakpointsMin,
  initAcc,
  toggleMenu,
  openModal,
};


window.helpFunctions.openModal();
window.helpFunctions.toggleMenu();
window.helpFunctions.initAcc();
