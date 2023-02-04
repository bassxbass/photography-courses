const popup = document.querySelector('.popup');
const popupMenuBtn = document.querySelector('.header__menu-button');
const popupCloseBtn = document.querySelector('.popup__button');

const signBtn = document.querySelector('.singup__button');

popupMenuBtn.addEventListener('click', function() {
  popup.classList.add('popup__opened');
})

popupCloseBtn.addEventListener('click', function() {
  popup.classList.remove('popup__opened');
})

signBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  signBtn.textContent = "Спасибо!";
})