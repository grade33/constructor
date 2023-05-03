export function openModal(name) {
  document.querySelectorAll(`[data-modal-open="${name}"]`).forEach((openBtn) => {
    openBtn.addEventListener('click', () => {
      const modalName = openBtn.dataset.modalOpen;
      const modal = document.querySelector(`[data-modal="${modalName}"]`);

      modal.classList.add('modal_active');
      document.body.style.overflow = 'hidden';
    });
  });

  document.addEventListener('click', (e) => {
    const modal = document.querySelector(`[data-modal="${name}"].modal_active`);
    const closeBtn = document.querySelector(`[data-modal="${name}"] .modal__close`);

    if (
      e.target.closest('[data-modal-open]') ||
      !modal ||
      (e.target.closest('.modal__content') && !closeBtn.contains(e.target))
    )
      return;

    modal.classList.remove('modal_active');
    document.body.style.overflow = null;
  });
}
