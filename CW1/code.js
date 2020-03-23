// #1
let age = prompt ("Enter your age");
let name = prompt ("Enter your name");

console.log (age);
console.log (name);

// #2
let age = prompt ("Enter your age");
let name = prompt ("Enter your name");

if (age >= 18 && name == 'Ярополк') {
  console.log ("Hello,"+ name);
}

// #3
let whiteList = ['Zevs', 'Gerodot', 'Paseydon'];
let name = prompt("Enter your name:");

if (whiteList.includes(name)) {
  console.log ("Allowed");
}

else {
 console.log ("Denied");          
}

// #4
let whiteList = ['Zevs', 'Gerodot', 'Paseydon'];
let blackList = [];
let age = prompt ("Enter your age");
let name = prompt ("Enter your name");


if (age>=18) {
  console.log ("Allowed");
}

else {
 console.log ("Denied");
 blackList.push (name);            
}

console.log (blackList);

// #5
let names = [];

for (let i=0; i<3; i=i+1) {
    let name = prompt ("Enter your name:");
    let age = prompt ("Enter your age:");

  if (age%2 !== 0) {
  names.push (name);
}

}

console.log (names);

// #6
let symbols = [1,2,3,4,5,4,3,2,1]
let s = '#';

for (let i=0; i < symbols.length; i=i+1) {
   let multyS = s.repeat (symbols[i]);
  console.log (multyS);
}

// #7
let symbols = [12, 43, 11, 27, 18];
let s = '#';

for (let i=0; i < symbols.length; i=i+1) {
  let multyS = s.repeat (symbols[i]);
  console.log (multyS);
}

// #8
let arr = [33, 88, 11];

function ageSr (ages) {
  let summ = 0;
  for (let i=0; i<3; i=i+1) {
    summ = summ + arr[i]; 
  }
  return (summ/arr.length);
}

ageSr (arr);
console.log (ageSr (arr));
