// модуль со вспомогат. функциями
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

export {getRandomNumber, checkStringLength};
