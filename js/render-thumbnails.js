import {createPictures} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const picturesData = createPictures();

const renderThumbnails = () => {
  picturesData.forEach((element) => {
    const pictureItem = pictureTemplate.cloneNode(true);
    pictureItem.querySelector('.picture__img').src = element.url;
    pictureItem.querySelector('.picture__likes').textContent = element.likes;
    pictureItem.querySelector('.picture__comments').textContent = element.comments;

    picturesList.append(pictureItem);
  });
};

export {renderThumbnails};
