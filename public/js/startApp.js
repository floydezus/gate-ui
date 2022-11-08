import {getData} from './api.js';
import {createCardListWithTemplate} from "./createCardList.js";
import {checkLogic, toggle} from "./checkLogic.js";

;(async function() {
    const url = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7';
    const data = await getData(url);
    createCardListWithTemplate(data);
    checkLogic();
    toggle();
})()
