const date = new Date();
date.getDate();

const date2 = new Date(1993,1,12); // 0 es Enero 11 es Diciembre

console.log(date);
console.log(date2);

let myVar;

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year; // this es para usar la variable
    this.month = month;
    this.day = day;
  }
}

const myDate = new Date(2021, 11 , 3)
console.log(myDate);
