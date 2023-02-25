const itemEl = document.querySelectorAll('li.item');
const numberOfCategories = itemEl.length;
console.log(`Number of categories: `, numberOfCategories);



const categoryRef = itemEl.forEach(el => {
    const category = el.firstElementChild.textContent;
    const elements = el.lastElementChild.children.length;
    
    console.log(`Category: `, category)
    console.log(`Elements: `, elements)
});






