//Task1 object creation and access
let book = {
  title: 'Islamic Book',
  author: 'Some person',
  year: '2020'
};
console.log(book);

//Task2
console.log(`Title of book is: ${book.title}`);
console.log(`Author of book is: ${book.author}`);

//Task3 Object methods
book = {
  author: 'some person',
  title: 'Islamic Book',
  authorTitleName: function(){
    return `${this.title} ${this.author}`;
  }
}

console.log(book.authorTitleName());

//Task4
book = {
  year: '2020',
  updateYear: function(){
    return this.year = 2022;
  }
}
  console.log(book.updateYear());

//Task5 Nested Objects
const library = {
  name: 'Aena Library',
  books: [
    {'book1Name' : 'book1'},
    {'book2Name' : 'book2'}
  ]
}

console.log(library);

//Task6

//Task7
