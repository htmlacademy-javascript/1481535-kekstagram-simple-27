import {isEscapeKey} from './util.js';
const userUploadForm = document.querySelector('.img-upload__overlay');
const useruserUploadOpenForm = document.querySelector('.img-upload__input');
const userUploadCloseForm = document.querySelector('.img-upload__cancel');
const bodyModalClass = document.querySelector(body);


useruserUploadOpenForm.addEventListener('load', () => {    //после загрузки фото показывается форма
  userUploadForm.classList.remove('.hidden');
  bodyModalClass.classList.add('.modal-open');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userUploadForm.classList.add('.hidden');
    }
  });
});

userUploadCloseForm.addEventListener('click', () => {
  userUploadForm.classList.add('.hidden');
  bodyModalClass.classList.remove('.modal-open');
});


