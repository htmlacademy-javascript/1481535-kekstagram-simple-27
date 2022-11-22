const btnMinus = document.querySelector('.scale__control--smaller');
const btnPlus = document.querySelector('.scale__control--bigger');
const inputValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;
const PERCENT_DIVIDER = 100;
let currentValue = DEFAULT_SCALE;

const scaleImage = (value = DEFAULT_SCALE) => {
  imgUploadPreview.style.transform = `scale(${value / PERCENT_DIVIDER})`;
  inputValue.value = `${value}%`;
};

const onMinusButtonClick = () => {
  if (currentValue > SCALE_STEP) {
    currentValue = currentValue - SCALE_STEP;
    scaleImage(currentValue);
  }
};

const onPlusButtonClick = () => {
  if (currentValue < DEFAULT_SCALE) {
    currentValue = currentValue + SCALE_STEP;
    scaleImage(currentValue);
  }
};

const resetScale = () => {
  scaleImage();
  currentValue = DEFAULT_SCALE;
};

const addScaleEffect = () => {
  btnMinus.addEventListener('click', onMinusButtonClick);
  btnPlus.addEventListener('click', onPlusButtonClick);
};

export {resetScale, addScaleEffect};
