import { getData } from './api.js';
import { renderThumbnails } from './render-thumbnails.js';
import { renderGetErrorMessage } from './modal-error.js';

const onGetSuccess = (data) => renderThumbnails(data);
const onGetFail = () => renderGetErrorMessage();
const loadData = () => getData(onGetSuccess, onGetFail);

export {loadData};
