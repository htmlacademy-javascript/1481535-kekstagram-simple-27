import { renderThumbnails } from './render-thumbnails.js';
import { addUploadFormAction, closeUserModal } from './upload-form.js';
import { createPicture } from './data.js';
import { setUserFormSubmit } from './validate-add-form.js';
import { getData } from './api.js';

renderThumbnails();
addUploadFormAction();

getData((photos) => {
  createPicture(photos);
});
setUserFormSubmit(closeUserModal);
