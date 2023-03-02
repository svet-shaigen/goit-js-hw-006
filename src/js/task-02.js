const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const arrayLi = [];
ingredients.map(ingredient => {
  console.log(ingredient)
  const listItem = document.createElement('li');
  console.log(listItem)
  listItem.textContent = ingredient
  listItem.classList.add('item')
  arrayLi.push(listItem)
  // listIngredients.append(listItem)
  // listItem.classList.add('item');
  // listItem.textContent = item;
  
  // return listItem;
});

console.log(arrayLi)

listIngredients.append(...arrayLi);





