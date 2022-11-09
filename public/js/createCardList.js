export function createCardListWithTemplate(dataCards) {
  const ul = document.createElement('ul');
  const placeholder = document.getElementById('list-placeholder');
  ul.classList.add('list', 'card-list');
  const template = document.getElementById('card-template');
  dataCards.forEach((card) => {
    const cardNode = document.importNode(template.content, true);
    cardNode.querySelector('.title').textContent = card?.title;
    cardNode.querySelector('.description').textContent = card?.body;
    ul.appendChild(cardNode);
  });
  placeholder.replaceWith(ul);
}
