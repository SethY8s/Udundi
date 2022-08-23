const explore = document.querySelector('.explore-position');

const startingAnimation = document.querySelector('.starting-animation');

const button = document.querySelectorAll('.on-click-button');

const modal = document.querySelector('.modal-container');

button.forEach((element) => {
  element.addEventListener('click', function () {
    explore.classList.add('delete-explore');
    modal.classList.add('adding-modal');
    startingAnimation.classList.remove('starting-animation');
  });
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
