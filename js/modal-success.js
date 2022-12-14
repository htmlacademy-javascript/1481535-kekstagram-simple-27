const successTemplate = document.querySelector('#success').content.querySelector('.success');
let successClone;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && successClone) {
    closeSuccess(evt);
  }
};

const createSuccess = () => {
  successClone = successTemplate.cloneNode(true);
  document.body.append(successClone);
  successClone.addEventListener('click', (evt) => {
    closeSuccess(evt);
  });
};

function closeSuccess(evt) {
  evt.preventDefault();
  document.removeEventListener('keydown', onDocumentKeydown);
  successClone.remove();
}

const renderSuccessMessage = () => {
  createSuccess();
  document.addEventListener('keydown', onDocumentKeydown);
};

export {renderSuccessMessage};
