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

// #9
let arr = [34, 1, 41, 22, 98];

function perSumm (pers) {
  let summ = 0;
  for (let i=0; i<3; i=i+1) {
    if (arr[i]%2 !== 0) {
    summ = summ + arr[i]**2; 
    }
  }
  return (summ);
}

perSumm (arr);
console.log (perSumm (arr));

// #10
let arr = [45, 44, 77, 22, 11];

function per (pers, n) {
  let arr1 = [];
  for (let i=0; i<5; i=i+1) {
    if (arr[i]%2 == 0) {
      arr1.push(step(arr[i], n)); 
    }
  }
  return (arr1);
}

function step (el, n) {
  let elsq = el**n;
  return elsq;
}

function step (el, n) {
  let elsq = el**n;
  return elsq;
}
console.log (per(arr, 3));

// #11
let arr = [24, 'text', 16, 45, 'e', 'PAX ROMANA'];

function per (pers, n) {
  let arr1 = [];
  for (let i=0; i<6; i=i+1) {
    if (typeof pers[i] == 'number') {
      arr1.push(step(pers[i], n)); 
    }
  }
  return (arr1);
}

function step (el, n) {
  let elsq = el**2;
  return (elsq);
}

function foo () {
  console.log (per(arr, 2));
}

foo ();


// #12
let names = [];
let ages = [];

for (;;) {
  
  let name = prompt ("Enter your name:");
  let age = prompt ("Enter your age:");
  
  names.push (name);
  ages.push (age);
  
  if (window.confirm("That's all?")) {
    break;
  }
  
}

function ageSr (ages) {
  let summ = 0;
  for (let i=0; i < ages.length; i=i+1) {
    summ = summ + parseInt(ages[i]); 
  }
  return (summ/ages.length);
}

function findThemAll(names, ages) {
  let avrg = ageSr(ages);
  let avrgNames = [];
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > avrg) {
      avrgNames.push(names[i]);
    }
  }
  return avrgNames;
}


console.log(findThemAll(names, ages));

