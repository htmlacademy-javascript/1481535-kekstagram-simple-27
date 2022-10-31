import {isEscapeKey} from './util.js';
const form = document.querySelector('.img-upload__form');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = document.querySelector('.success__button');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = document.querySelector('.error__button');

const pristine = new Pristine(form, {
  classTo: 'text__description',
  errorTextParent: 'text__description',
  errorTextClass: 'text__description__error-text',
});

const validateForm = form.addEventListener('submit'(evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    const successMessage = successMessageTemplate.cloneNode(true); //Выводим сообщение об умпешном отправлении
    document.body.insertAdjacentElement('beforeend', successMessage);

    const addHidden = successButton.addEventListener('click', () => {
      successMessageTemplate.classList.add('hidden');
    });
    const onPopupEscKeydown = (evt) => { //закрываем попап об успешной отправке по нажатию на Esc
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        addHidden();
      }
    };

    window.addEventListener('click', () => { // Закрываем попап об успешной отправке по клику по клику на произвольную область экрана за пределами блока с сообщением
      successMessageTemplate.classList.add('hidden');
    });
  } else {
    const errorMessage = errorMessageTemplate.cloneNode(true); //Выводим сообщение об ошибке
    document.body.insertAdjacentElement('beforeend', errorMessage);

    const addHiddenError = errorButton.addEventListener('click', () => {
      errorMessageTemplate.classList.add('hidden');
    });

    const onPopupEscKeydown = (evt) => { //закрываем попап об ошибке по нажатию на Esc
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        addHiddenError();
      }
    };

    window.addEventListener('click', () => { // Закрываем попап об ошибке по клику по клику на произвольную область экрана за пределами блока с сообщением
      errorMessageTemplate.classList.add('hidden');
    });
  }
});

export {validateForm};
