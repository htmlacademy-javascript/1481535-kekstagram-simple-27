import {getRandomNumber} from './util.js';

//модуль, который создаёт данные
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

export{createPictures};

