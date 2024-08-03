//Task1
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

//Task3
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

//Task5
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

//Task7
function productNum(){
  const num1 = 6;
  const num2 = 2;
  const product = num1 * num2;
  console.log(`Product of ${num1} and ${num2} is: ${product}`);
}
productNum();

//Task8
function greet(name, age){
  const yourName = name;
  const yourAge = age;
  const greetingMsg = `Hi ${yourName}, happy to see you. I am ${yourAge}. What's your age?`;
  console.log(greetingMsg);
}

greet('Iqra', 22);

//Task9


//Task10
