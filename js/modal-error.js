const GET_ERROR_TEXT = 'Ошибка при загрузке данных';
const POST_ERROR_TEXT = 'Ошибка размещения фотографии';
let errorClone;

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && errorClone) {
    closeError(evt);
  }
};

const createError = (text) => {
  errorClone = errorTemplate.cloneNode(true);
  errorClone.querySelector('.error__title').textContent = text;
  document.body.append(errorClone);
  errorClone.addEventListener('click', (evt) => {
    closeError(evt);
  });
};

function closeError(evt) {
  evt.preventDefault();
  document.removeEventListener('keydown', onDocumentKeydown);
  errorClone.remove();
}

const renderGetErrorMessage = () => {
  createError(GET_ERROR_TEXT);
  document.addEventListener('keydown', onDocumentKeydown);
};

const renderPostErrorMessage = () => {
  createError(POST_ERROR_TEXT);
  document.addEventListener('keydown', onDocumentKeydown);
};

export { renderGetErrorMessage, renderPostErrorMessage };
