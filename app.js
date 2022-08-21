const explore = document.querySelector('.explore-position');

const button = document.querySelector('.button');

const modal = document.querySelector('.modal-container');

button.addEventListener('click', function () {
  console.log('hello');
  console.log(explore);
  explore.classList.add('delete-explore');
  console.log(modal);
  modal.classList.add('adding-modal');
});

const modalButton = document.querySelector('.modal-button');

modalButton.addEventListener('click', function(){
    explore.classList.remove('delete-explore');
    modal.classList.remove('adding-modal');
})
