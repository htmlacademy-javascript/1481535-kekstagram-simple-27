import { createPictures } from "./data";
//Отобразить фотографии других пользователей
const pictureTemplate = document.querySelector('#picture')   //нахожу эл-т, который буду копировать
.content
.querySelector('.picture');

const picturesList = document.querySelector('.pictures');  //нахожу блок, куда буду втсавлять фото

const picturesItems = createPictures();

picturesItems.forEach((photo) => {
  const pictureItem = pictureTemplate.cloneNode(true);     //копирую фото
  pictureItem.querySelector('.picture__img').textContent = photo.url;
  pictureItem.querySelector('.picture__likes').textContent = photo.likes;
  pictureItem.querySelector('.picture__comments').textContent = photo.comments;

  picturesList.append(pictureItem);                        // вставляю фотки в конец списка
})





