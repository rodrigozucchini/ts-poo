export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  //comportamientos o metodos
  printFormat(): string {
    return `${this.year}/${this.month}/${this.day}`;
  }
  // no es buena forma pero sirve para practicar
  add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this.day += amount;
    }
    if (type === "months") {
      this.month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1993,7,5);
console.log(myDate.printFormat());
myDate.add(3, "days");
console.log(myDate.printFormat());
myDate.add(3, "years");
console.log(myDate.printFormat());
