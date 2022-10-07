const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('строка', 9);


const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;

};

getRandomNumber(10, 15);
