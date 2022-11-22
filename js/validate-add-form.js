import { sendData } from './api.js';
import {openUserModal, closeUserModal} from './upload-form.js';
import {showAlert} from './util.js';
const MIN_VALUE = 20;
const MAX_VALUE = 140;

const userUploadForm = document.querySelector('.img-upload__form');
const userUploadFormDescription = document.querySelector('.text__description');

const pristine = new Pristine(userUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});


const setUserFormSubmit = (onSuccess) => {
  userUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if(isValid) {
      sendData(
        () => onSuccess(),
        () => showAlert('Не удалось загрузить фото, попробуйте ещё раз');
        new FormData(evt.target),
      );
    }
  });
};

const validateUserUploadFormDescription = (value) => value.length >= MIN_VALUE && value.length <= MAX_VALUE;
const createUserUploadFormDescriptionError = () => `Длина сообщения должна составлять от ${MIN_VALUE} до ${MAX_VALUE} символов`;
pristine.addValidator(userUploadFormDescription, validateUserUploadFormDescription,
 createUserUploadFormDescriptionError);

const validateAddForm = () => pristine.validate();

export {validateAddForm, setUserFormSubmit};
