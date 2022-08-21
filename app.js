const explore = document.querySelector('.explore-position');

const button = document.querySelector('.button');

const modal = document.querySelector('.modal-container');

button.addEventListener('click', function () {
  explore.classList.add('delete-explore');
  modal.classList.add('adding-modal');
});

const modalButton = document.querySelector('.modal-button');

modalButton.addEventListener('click', function () {
  explore.classList.add('returning-explore');
  modal.classList.add('removing-modal');

  setTimeout(() => {
    explore.classList.remove('delete-explore');
    modal.classList.remove('adding-modal');
    explore.classList.remove('returning-explore');
    modal.classList.remove('removing-modal');
  }, 500);
});
