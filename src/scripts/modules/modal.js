export function openModal() {
  document.querySelectorAll(`[data-modal-open]`).forEach((openBtn) => {
    openBtn.addEventListener('click', () => {
      const modalName = openBtn.dataset.modalOpen;
      const modal = document.querySelector(`[data-modal="${modalName}"]`);

      modal.classList.add('modal_active');
      document.body.style.overflow = 'hidden';
    });
  });

  document.addEventListener('click', (e) => {
    document.querySelectorAll(`[data-modal].modal_active`).forEach((modal) => {
      const closeBtn = modal.querySelector(`.modal__close`);

      if (
        e.target.closest('[data-modal-open]') ||
        !modal ||
        (e.target.closest('.modal__inner') && !closeBtn.contains(e.target))
      )
        return;

      modal.classList.remove('modal_active');
      document.body.style.overflow = null;
    });
  });
}
