// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто
// елементів `li.item`. Вийде `'У списку 3 категорії.'`.

// Для кожного елемента `li.item` в списку `ul#categories`, знайде і виведе в
// консоль текст заголовка елемента (тега h2) і кількість елементів в категорії
// (всіх вкладених в нього елементів `li`).

// Наприклад, для першої категорії вийде:

// - Категорія: Тварини
// - Кількість елементів: 4

let categories = document.querySelectorAll('ul#categories>li.item')
console.log(`У списку ${categories.length} категорії`)

categories.forEach(category => {
    let categoryH2 = category.querySelector('h2')
    console.log(`Категорія: ${categoryH2.innerText}`)
    
    let categoryElements = category.querySelectorAll('ul li')
    console.log(`Кількість елементів: ${categoryElements.length}`)
})