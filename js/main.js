const PICTURES_COUNT = 25;
const AVATARS_CAUNT = 6;

const likesCount = {
  MIN: 15,
  MAX: 200,
};

const commentLines = ['На пляже', 'Моя машина', 'Девушка моей мечты', 'На концерте хора', 'Мой закат'];

const descriptions = [
  'Отдых летом на море. #египет #чилим',
  'Купил новый фотик! #new #saperfoto',
  'Мой ужин сегодня #food # travel',
  'Отдыхаем... #relax #photo',
  'Берегите отношения со своими друзьями #friends #дружба',
];

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

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
}


const createMessage = () =>
  Array.from({
      length: getRandomNumber(1, 2)
    }, () =>
    getRandomArrayElement(commentLines)
  ).join(' ');

const creatComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomNumber(1, AVATARS_CAUNT)}.svg`,
  message: createMessage(),
});

const creatPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomNumber(likesCount.MIN, likesCount.MAX),
  comments: Array.from({
      length: getRandomNumber(0, 20)
    },
    (_item, commentIndex) => creatComment(commentIndex + 1)
  ),
});

const getPictures = () =>
  Array.from({
      length: PICTURES_COUNT
    }, (_, pictureIndex) =>
    creatPicture(pictureIndex + 1)
  );

getPictures();
