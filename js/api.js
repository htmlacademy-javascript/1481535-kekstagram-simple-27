const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      createPicture(photos);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
      'https://27.javascript.pages.academy/kekstagram-simple/data', {
        method: 'POST',
        body,
      },
    )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось загрузить фото, попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось загрузить фото, попробуйте ещё раз');
    });
};

export {
  getData,
  sendData
};
