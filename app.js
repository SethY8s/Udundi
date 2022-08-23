const explore = document.querySelector('.explore-position');

const startingAnimation = document.querySelector('.starting-animation');

const button = document.querySelectorAll('.on-click-button');

const modal = document.querySelector('.modal-container');

// had two seperate elements that had class of on-click-button so I had to interate over them
button.forEach((element) => {
  element.addEventListener('click', function () {
    explore.classList.add('removing-explore');
    modal.classList.add('adding-modal');
    startingAnimation.classList.remove('starting-animation');
  });
});

const modalButton = document.querySelector('.modal-button');

modalButton.addEventListener('click', function () {
  explore.classList.add('returning-explore');
  modal.classList.add('removing-modal');


// used setTimeOut since deleting these classes right away doesn't allow the animations to play
  setTimeout(() => {
    explore.classList.remove('removing-explore');
    modal.classList.remove('adding-modal');
    explore.classList.remove('returning-explore');
    modal.classList.remove('removing-modal');
  }, 500);
});
