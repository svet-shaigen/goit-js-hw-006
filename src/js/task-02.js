const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const ingredientsListItems = ingredients.map(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = item;
  
  return listItem;
});


listIngredients.append(...ingredientsListItems);





