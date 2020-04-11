function createStudent(sName, sAge, sRating) {
   let student = {
    name: sName,
    age: sAge,
    rating: sRating,
    birthYear() {
      let today = new Date();
      let year = today.getFullYear();
      return (year - this.age);
    }
  };
  return student; 
}

function leapYear(year) {
  if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    return 1;
  }
  return 0;
}

function predictedPoints(mCP) {
  const mP = 100;
  return (this.sRating / mCP) * mP - 3 * this.isleapYear();
}

function finallyPoint (vl) {
  let retvl = 0;
  if (vl >= 65) {
  retvl = 5;
  }
    else {
      if (vl >=60 && vl < 65) {
      retvl = 4;
      }
    }
    else {
      if (vl >=40 && vl < 60) {
      retvl = 3;
      }
    }
    else {
      retvl = 2;
    }
return retvl;
}


let students = [];
let ages = [];
let points = []

for (;;) {
  let name = prompt('Как тебя зовут?');
  let age = prompt('Сколько тебе лет?');
  let rating = prompt('Сколько у тебя сейчас баллов?');
  
  students.push (name);
  ages.push (age);
  points.push (rating);
  
  if (window.confirm("That's all?")) {
    break;
  }
}

function GetMaxBall() {
  let summ = 0;
  for (let i = 0; i < studentsobject.length; i = i + 1) {
    if (summ < parseInt(studentsobject[i].sRating)) {
    summ = parseInt(studentsobject[i].sRating);
    }
  }
return summ;
}

function GetAvg() {
  let summ = 0;
  for (let i = 0; i < studentsobject.length; i = i + 1) {
  summ = summ + parseInt(studentsobject[i].sRating);
  }
return (summ/studentsobject.length);
}

function setup () {
  console.log('Среднее: ' + GetAvg());
  for (let i = 0; i < studentsobject.length; i = i + 1) {
  let p1 = studentsobject[i].predictedPoint(GetMaxBall());
  let p2 = studentsobject[i].calcFinallypoint(p1);

  console.log('Имя: ' + studentsobject[i].sName + '; Год рождения: ' +     studentsobject[i].birthYear() + '; Високосный год: ' + studentsobject[i].isleapYear() + '; Прогнозирование финального рейтинга: ' + p1 + '; Финальная оценка в ведомости: ' + p2);
  }
}

