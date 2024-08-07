//Task1-Array creation and access
let array1 = [1, 2, 3, 4, 5];
console.log(array1);

//Task2 
array1 = [1, 3, 5, 8, 6];
const firstElement = array1[0];
const lastElement = array1[array1.length-1];
console.log(`First element of array: ${firstElement}`);
console.log(`Last element of array: ${lastElement}`);

//Task3 Array methods
let array2 = [4, 6, 2, 5, 8];
array2.push(1);
console.log(array2);

//Task 4
array2 = [2, 4, 6, 1, 5];
array2.pop(array2.length-1);
console.log(array2);

//Task5
array2 = [4, 2, 9, 1, 0];
array2.shift(0);
console.log(array2);

//Task6
array2 = [2, 6, 1, 4];
array2.unshift(8);
console.log(array2);
