const PICTURES_COUNT = 25;
const DESCRIPTION = 'Отдых летом на море. #египет #чилим';

const likesCount = {
  MIN: 15,
  MAX: 200,
};

const commentsCount = {
  MIN: 0,
  MAX: 200,
};

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
checkStringLength('string', 20);

let idCounter = 0;

const createPicture = () => {
  idCounter++;
  return {
    id: idCounter,
    url: `photos/${idCounter}.jpg`,
    description: DESCRIPTION,
    likes: getRandomNumber(likesCount.MIN, likesCount.MAX),
    comments: getRandomNumber(commentsCount.MIN, commentsCount.MAX),
  };
};

const createPictures = () => Array.from({length: PICTURES_COUNT}, createPicture);

createPictures();


