function getAllCards() {
  const allCardNodes = document.querySelectorAll('li:not(.is-hidden).card-wrapper');
  return [...allCardNodes];
}

export function checkboxLogic() {
  const allCards = getAllCards();
  allCards.forEach((card) => {
    card.classList.remove('checked');
    const cardCheckbox = card.querySelector('.checkbox');
    if (cardCheckbox.checked) {
      card.classList.add('checked');
    }
  });

  const checkedCount = getCheckedCount() || 0;
  const counter = document.querySelector('.counter');
  counter.textContent = `${checkedCount} выбрано из ${allCards.length}`;
}

export function getCheckedCount() {
  const allCards = getAllCards();
  return allCards.filter((card) => {
    const cardCheckbox = card.querySelector('.checkbox');
    return cardCheckbox.checked;
  }).length;
}

export function toggle() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', () => {
      checkboxLogic();
    });
  }
}
