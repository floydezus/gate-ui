import getData from './api.js';
import { createCardListWithTemplate } from './createCardList.js';
import { checkboxLogic, toggle } from './checkboxLogic.js';
import { fillInput, filterData, setDisable } from './search.js';

const url = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7';

(async function startApp() {
  let query = '';
  setDisable('on');
  const data = await getData(url);
  setDisable('off');
  if ('URLSearchParams' in window) {
    const searchParams = new URLSearchParams(window.location.search);
    query = searchParams.get('query');
  }
  if (query) {
    fillInput(query);
  }
  const filteredData = filterData(data, query);
  createCardListWithTemplate(filteredData);
  checkboxLogic();
  toggle();
}());
