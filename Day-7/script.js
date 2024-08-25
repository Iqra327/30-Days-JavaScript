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
book.updateYear();
console.log(book.year);

//Task5 Nested Objects
const library = {
  name: 'Aena Library',
  books: [
    {'bookName' : 'book1'},
    {'bookName' : 'book2'}
  ]
}

console.log(library);

//Task6
library.books.map( book => console.log(book.bookName));

//Task7 this keyword
const library2 = {
  name: 'Aena Library',
  book : [
    {
    bookTitle: 'Nature',
    Year: 2024
    }
  ],
  display: function(){
    return (`Book title: ${this.book[0].bookTitle} , Year: ${this.book[0].Year}`);
  }
};

console.log(library2.display());

//Task 8 Object Iteration
const lib = {
  name: 'Aena Library',
  Year: 2022,
  Title: 'Do fun' 
};

for(const x in lib){
  console.log(`${x}: ${lib[x]}`)
}

//Task9

//Object.keys return the property names
const properties = Object.keys(lib);
console.log(properties);

//Object.values returns the property Values
const values = Object.values(lib);
console.log(values);

//just applying for each loop on values
values.forEach((name) => {
  let propertyValue = '';
  propertyValue += name;
  console.log(propertyValue);
});

//Object.entries return the whole object
const object = Object.entries(lib);
console.log(object);