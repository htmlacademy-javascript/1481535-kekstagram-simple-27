import {isEscapeKey} from './util.js';
const userUploadForm = document.querySelector('.img-upload__overlay');
const userUploadOpenForm = document.querySelector('.img-upload__input');
const userUploadCloseForm = document.querySelector('.img-upload__cancel');
const bodyModalClass = document.querySelector('body');

const onPopupEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal() {
  userUploadForm.classList.remove('.hidden');
  bodyModalClass.classList.add('.modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
};
function closeUserModal() {
  userUploadForm.classList.add('.hidden');
  bodyModalClass.classList.remove('.modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
};

userUploadOpenForm.addEventListener('load', () => {
  openUserModal();
});

userUploadCloseForm.addEventListener('click', () => {
  closeUserModal();
});


