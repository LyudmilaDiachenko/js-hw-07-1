// ## Завдання 2

// В HTML є пустий список `ul#ingredients`.

// ```html
// <ul id="ingredients"></ul>
// ```

// В JS є масив рядків.

// ```js
// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];
// ```

// Напиши скрипт, який для кожного елемента масиву `ingredients` створить окремий
// `li`, після чого вставить всі `li` за одну операцію в список `ul.ingredients`.
// Для створення DOM-вузлів використовуй `document.createElement()`.


const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
let elements = ingredients.map(ingredient => {
  let element = document.createElement('li')
  element.textContent = ingredient
  return element
})

document.querySelector('ul#ingredients').append(...elements)