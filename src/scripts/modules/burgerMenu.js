export function toggleMenu() {
  const menu = document.querySelector(`.menu`);
  const btn = document.querySelector(`.header__burger`);

  document.addEventListener('click', (e) => {
    if(btn.contains(e.target)) {
      menu.classList.toggle('menu_active');

      if (document.body.style.overflow) {
        document.body.style.overflow = 'hidden';
        return;
      }
      document.body.style.overflow = null;
      return
    }

    if (!menu.classList.contains('menu_active')) return;

    menu.classList.remove('menu_active');
    document.body.style.overflow = null;
  });
}
