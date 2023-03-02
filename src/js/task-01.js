const itemEl = document.querySelectorAll('.item');
// console.log(itemEl);
const numberOfCategories = itemEl.length;
// console.log(`Number of categories: `, numberOfCategories);



// itemEl.forEach(element => {
//     const category = element.firstElementChild.textContent;
//     const elements = element.lastElementChild.children.length;
    
//     console.log(`Category: `, category)
//     console.log(`Elements: `, elements)
// });

itemEl.forEach(li => {
    console.log(li.querySelector('h2').textContent)
    console.log(li.querySelectorAll('li').length)
    
    // const test = li.querySelectorAll('li')
    // test.forEach(element => {
    //     console.log(element.textContent)
    // })
})






