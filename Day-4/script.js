//Task1
for(let i =1; i <= 10; i++){
  console.log(i);
}

//Task2
for(let i = 1 ; i <=10; i++){
  console.log(i * 5);
}

//Task3
let i = 1;
let sum = 0;
while(i<=10){
  sum+= i;
  i++;
}
console.log(sum);

//Task4
let reverse = 10;
while(reverse >= 1){
  console.log(reverse);
  reverse--;
}

//Task5
let num5 = 1;
do{
  console.log(num5);
  num5++;
}
while(num5 <= 5);

//Task6
let factorialNum = 6;
let factorial = 1;
do{
  factorial *= factorialNum;
  factorialNum--;
}while(factorialNum >=1 )
console.log(factorial);

// Task7
for(let num = 1; num <=5; num++){
  let sum = '';
  for(let row = 1; row <= num; row++){
    sum += '* ';
  }
  console.log(sum);
}

//Task8
for(let num = 1; num <= 10; num++){
  if(num === 5) continue;
  console.log(num);
}

//Task9
for(let num = 1; num <= 10; num++){
  if(num === 7) break;
  console.log(num);
}

