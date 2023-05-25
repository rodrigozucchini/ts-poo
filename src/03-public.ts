//uso public para hacer publicas las variables, por defecto es publico igual
export class MyDate {
  public year: number;
  public month: number;
  public day: number; // con (readonly, si lo uso) protega que nadie cambie, de adentro y afuera

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  //comportamientos o metodos
  public printFormat(): string {
    return `${this.year}/${this.month}/${this.day}`;
  }
  // no es buena forma pero sirve para practicar
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
}

const myDate = new MyDate(1993,7,5);
console.log(myDate.printFormat());
myDate.add(3, "days");
console.log(myDate.printFormat());
myDate.add(3, "years");
console.log(myDate.printFormat());
