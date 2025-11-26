const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

// Відкрити / закрити по кнопках
modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

// Закриття по кліку на фон (бекдроп)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('is-hidden');
  }
});

// Закриття по ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.add('is-hidden');
  }
});
