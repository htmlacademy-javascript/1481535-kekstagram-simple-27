const btnMinus = document.querySelector('.scale__control--smaller');
const btnPlus = document.querySelector('.scale__control--bigger');
const inputValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const scaleControlValue = 100;
inputValue.value = `${scaleControlValue}%`;

btnMinus.addEventListener('click', () => {
  if (scaleControlValue > 25) {
    scaleControlValue -= 25;
    inputValue = `${scaleControlValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleControlValue / 100})`;
  }
});

btnPlus.addEventListener('click', () => {
  if(scaleControlValue < 100) {
    scaleControlValue += 25;
    inputValue = `${scaleControlValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleControlValue / 100})`;
  }
});


// ------------------------------------
const imgUploadEffects = document.querySelector('.img-upload__effects');

//1. Создать объект с ключами id и значением класса, который нужно добавлять;
//2. если input checked, добавляю класс полю предварительного просмотра (imgUploadPreview).


