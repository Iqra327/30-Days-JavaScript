//Task1
const num1 = 0;
if(num1 > 0){
  console.log("Number is positive");
}
else if(num1 < 0){
  console.log("Number is negative");
}else{
  console.log("Number is 0");
}

//Task2
const personAge = 17;
if(personAge >= 18){
  console.log("Person is eligible to vote");
}else{
  console.log("Wait to be 18 first:)");
}

//Task3
const num3 = 10;
const num4 = 20;
const num5 = 30;
if(num3 > num4)
  if(num3 > num5){
  console.log("Num3 is largest");
  }else {
    console.log("Num5 is greater")
  }
else(num4 > num3)
  if(num4 > num5){
    console.log("Num4 is largest")
  }else{
    console.log("Num5 is greater")
  }

//Task4
let num = 4;
switch (num) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Today is Sunday");
    break;
}

//Task5
let score = 75;
switch(true){
  case (score >= 85 && score <= 100):
    console.log("Grade is A");
    break;
  case (score >= 70 && score < 85):
    console.log("Grade is B");
    break;
  case (score >= 55 && score < 70):
    console.log("Grade is C");
    break;
  case (score >= 40 && score < 55):
    console.log("Grade is D");
    break;
  default:
    console.log("Grade is F");
}

//Task6
const num6 = 40;
if(num6 !== 0 ){
  console.log(num6 % 2 == 0 ? "Number is even" : "Number is odd");
}else{
  console.log("Number is 0");
}

//Task7
let year = 2024;

if(year % 4 === 0 ){
  if(year % 100 === 0){
    if(year % 400 === 0){
      console.log("year is leap year");
    }else{
      console.log("year is not leap year");
    }
  }else{
    console.log("year is a leap year")
  }
}else{
  console.log("year is not a leap year");
}