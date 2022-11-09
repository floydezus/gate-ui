import { checkboxLogic } from './checkboxLogic.js';

(function () {
  const form = document.querySelector('#form-search');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get('search');
    const cards = document.querySelectorAll('.card-wrapper');
    cards.forEach((currentCard) => {
      const title = currentCard.querySelector('.title');
      if (title.innerText.toLowerCase()
        .includes(searchQuery.toLowerCase())) {
        currentCard.classList.remove('is-hidden');
      } else {
        currentCard.classList.add('is-hidden');
      }
    });
    checkboxLogic();
    if ('URLSearchParams' in window) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('query', searchQuery.toString());
      window.location.search = searchParams.toString();
    }
  });
}());

export function filterData(data, queryString = '') {
  if (!queryString) {
    return data;
  }
  const regexp = new RegExp(queryString, 'gi');
  return data.filter((item) => item.title.match(regexp));
}

export function fillInput(query = '') {
  const input = document.querySelector('.search-input');
  input.setAttribute('value', query);
}

export function setDisable(value) {
  const button = document.querySelector('button[type=submit]');
  const input = document.querySelector('.search-input');
  if (value === 'on') {
    button.disabled = true;
    input.disabled = true;
  } else {
    button.disabled = false;
    input.disabled = false;
  }
}
