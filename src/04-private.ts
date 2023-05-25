export class MyDate {
  public year: number;
  public month: number;
  private day: number; // protego variable y solo acceso con add

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${this.year}/${month}/${day}`;
  }
  private addPadding(value: number) { // solo la clase interna puede acceder
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  public add(amount: number, type: "days" | "months" | "years") {
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
  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993,7,10);
console.log(myDate.printFormat());
myDate.add(3, "days");
console.log(myDate.printFormat());
myDate.add(3, "years");
console.log(myDate.printFormat());
myDate.add(3, "years");
//console.log(myDate.day); NO SE PUEDE
//console.log(myDate.addPadding(3)); NO SE PUEDE  PORQUE addPading es privada
console.log(myDate.getDay());
