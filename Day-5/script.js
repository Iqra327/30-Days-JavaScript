//Task1-function declaration
function checkNumber(num){
  if(num % 2 === 0){
    console.log(`Number: ${num} is even`);
  }
  else{
    console.log(`Number: ${num} is odd`);
  }
}
checkNumber(7);
checkNumber(10);

//Task2
function calculateSquare(num){
  let result = num * num;
  console.log(`Square of ${num} is: ${result}`);
}
calculateSquare(8);

//Task3-function expression
const maxNum = (num1, num2) => {
  if(num1 > num2){
    console.log(`Number ${num1} is max than ${num2}`);
  }else{
    console.log(`Number ${num2} is max than ${num1}`);
  }
}
maxNum(4, 8);
maxNum(22, 5);

//Task4
const concatStrings = function () {
  const string1 = "Hi, I am Iqra Rasheed.";
  const string2 = "Best of Luck!";
  const finalString = `${string1} ${string2}`;
  console.log(finalString);
}
concatStrings();

//Task5-- arrow functions
const numberSum = (num1,num2) => num1 + num2;
console.log(numberSum(5, 20));

//Task6
const matchCharacter = () => {
  const string = "Iqra";
  let substring = 'I';
  if(string.includes(substring)){
    console.log(`Yes, ${string} contains that specific character '${substring}'.`);
  }
  else{
    console.log(`No, ${string} doesn't contain that specific character '${substring}'.`);
  }
}
matchCharacter();

//Task7--function parameter, default value
function productNum(num1, num2){
  const product = num1 * num2;
  console.log(`Product of ${num1} and ${num2} is: ${product}`);
}
productNum(2, 6);

//Task8
function greet(name, age){
  const yourName = name;
  const yourAge = age;
  const greetingMsg = `Hi ${yourName}, happy to see you. I am ${yourAge}. What's your age?`;
  console.log(greetingMsg);
}

greet('Iqra', 22);

//Task9--High Order Functions
function callFuncMultiTimes(func, times){
  for (let i = 1; i <= times; i++){
    func();
  }
}

function addNumbers(){
  console.log(4+8);
}

callFuncMultiTimes(addNumbers, 3);

//another example
function callFuncMultiTimes(func, times, ...args){
  for(let i = 1; i <= times; i++){
    func(...args);
  }
}
const sumNumbers = (a,b) => console.log(a+b) ;

callFuncMultiTimes(sumNumbers,2, 10, 5);

//Task10
function addNum(x){
  return x + 8;
}
function mulitplyNum(x){
  return x * x; 
}

function mulitplyAddNum(func1, func2, value){
 return func1(func2(value));
};

console.log(mulitplyAddNum(addNum, mulitplyNum, 4));