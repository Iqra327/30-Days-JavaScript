//Task1-Array creation and access
let array1 = [1, 2, 3, 4, 5];
console.log(array1);

//Task2 
array1 = [1, 3, 5, 8, 6];
const firstElement = array1[0];
const lastElement = array1[array1.length-1];
console.log(`First element of array: ${firstElement}`);
console.log(`Last element of array: ${lastElement}`);

//Task3 Array methods basics
let array2 = [4, 6, 2, 5, 8];
array2.push(1);
console.log(array2);

//Task 4
array2 = [2, 4, 6, 1, 5];
array2.pop();
console.log(array2);

//Task5
array2 = [4, 2, 9, 1, 0];
array2.shift();
console.log(array2);

//Task6
array2 = [2, 6, 1, 4];
array2.unshift(8);
console.log(array2);

//Task7 Array methods intermediate
let array3 = [2, 4, 3, 6];
const array = array3.map(num => {return num * 2})
console.log(array);

//Task8
array3 = [8, 1, 2, 3, 4 ];
const arr = array3.filter((element) => {
  return element % 2 === 0
});
console.log(arr);

//Task9
array3 = [3, 1, 5, 4, 2];
const sumUpValues = array3.reduce(sumValues);
function sumValues(accumulator, number ){
  return accumulator + number;
};

console.log(sumUpValues);


//Task10 Array iteration
let array4 = [2, 1, 3, 5, 6];
for(let i = 0; i <= array4.length - 1; i++){
  console.log( array4[i]);
}

//Task11
array4 = [4, 7, 3, 1, 9];
array4.forEach(num => console.log(num));

//Task12 Multi-dimensional arrays
let array5 = [
  ['hello', 'how are you'],
  ['iqra'],
  ['rasheed']
];
console.log(array5);

//Task13
array5 = [
  ['Best of Luck Iqra!'],
  ['You can do it Iqra', 'Just do it'],
  ['Stay Consistent']
];

const arrIndex = array5[1][0];
console.log(arrIndex);