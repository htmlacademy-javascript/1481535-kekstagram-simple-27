import {isEscapeKey} from './util.js';
import {validateAddForm} from './validate-add-form.js';


const userUploadInput = document.querySelector('.img-upload__input');
const userUploadFormOverlay = document.querySelector('.img-upload__overlay');
const userUploadCloseButton = document.querySelector('.img-upload__cancel');
const userUploadForm = document.querySelector('.img-upload__form');

const openUserModal = () => {
  userUploadFormOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  userUploadCloseButton.addEventListener('click', userUploadCloseButtonClick);
};

const closeUserModal = () => {
  userUploadFormOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  userUploadCloseButton.removeEventListener('click', userUploadCloseButtonClick);
  userUploadInput.value = '';
  userUploadForm.reset();
};

const onPopupEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const userUploadCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeUserModal();
};

const onUserUploadInputChange = () => {
  openUserModal();
};

const onUserUploadFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateAddForm()) {}
};

const addUploadFormAction = () => {

  userUploadInput.addEventListener('change', onUserUploadInputChange);
  userUploadForm.addEventListener('submit', onUserUploadFormSubmit);
};

export {addUploadFormAction};
