
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');


const renderThumbnail = (item) => {
  const pictureItem = pictureTemplate.cloneNode(true);
  pictureItem.querySelector('.picture__img').src = item.url;
  pictureItem.querySelector('.picture__likes').textContent = item.likes;
  pictureItem.querySelector('.picture__comments').textContent = item.comments;

  picturesList.append(pictureItem);
};

const renderThumbnails = (data) => {
  data.forEach((item) =>  renderThumbnail(item));
};

export {renderThumbnails};
