import {validateAddForm, resetAddFormValidation} from './validate-add-form.js';
import {resetScale, addScaleEffect} from './scale-img.js';
import {changeEffect, resetEffects} from './img-effect.js';
import {renderPostErrorMessage} from './modal-error.js';
import {renderSuccessMessage} from './modal-success.js';
import {sendData} from './api.js';

const userUploadInput = document.querySelector('.img-upload__input');
const userUploadFormOverlay = document.querySelector('.img-upload__overlay');
const userUploadCloseButton = document.querySelector('.img-upload__cancel');
const userUploadForm = document.querySelector('.img-upload__form');
const imgUploadEffects = document.querySelector('.img-upload__effects');
const imgUploadSubmitButton = document.querySelector('.img-upload__submit');

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
  resetScale();
  resetEffects();
  resetAddFormValidation();
};

function onPopupEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal();
  }
}

function userUploadCloseButtonClick(evt) {
  evt.preventDefault();
  closeUserModal();
}

const onUserUploadInputChange = () => {
  openUserModal();
};

const onImgUploadEffectsChange = (evt) => {
  changeEffect(evt.target.value);
};

const onPostSuccess = () => {
  renderSuccessMessage();
  closeUserModal();
  imgUploadSubmitButton.disabled = false;
};

const onPostFail = () => {
  renderPostErrorMessage();
  imgUploadSubmitButton.disabled = false;
};

const onUserUploadFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateAddForm()) {
    imgUploadSubmitButton.disabled = true;
    sendData(onPostSuccess, onPostFail, new FormData(evt.target));
  }
};

const addUploadFormAction = () => {
  addScaleEffect();
  userUploadInput.addEventListener('change', onUserUploadInputChange);
  userUploadForm.addEventListener('submit', onUserUploadFormSubmit);
  imgUploadEffects.addEventListener('change', onImgUploadEffectsChange);
};

export {addUploadFormAction, openUserModal, closeUserModal};
