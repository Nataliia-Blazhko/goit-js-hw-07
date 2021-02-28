const categoriesList = categories.querySelectorAll('li.item');
console.log(`В списке ${categoriesList.length} категории.`);

categoriesList.forEach(category => {
  const title = category.querySelector('h2');
  const list = category.querySelectorAll('ul > li');
  console.log(
    `Категория: ${title.textContent} \nКоличество элементов: ${list.length}`,
  );
});
