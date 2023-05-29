//Con get podemos acceder a una propiedad con un alcance privado, podemos obtener los datos de esa propiedad pero no modificarlos o mutarlos.

//Lo podemos acceder como si fuese una propiedad más de la instancia.

//Por definición, todos los getters tienen que retornar algo.


export class MyDate {
  constructor(
    public year: number = 2000,
    public month: number= 0,
    private _day: number= 1){}

  public printFormat(): string {
    const day = this.addPadding(this._day);
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
      this._day += amount;
    }
    if (type === "months") {
      this.month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }
  get day() {
    return this._day;
  }
  get isLeapYear(): boolean { // con get se comporta como propiedad // todos los getters deben retornar algo
      if (this.year % 400 === 0) return true;
      if (this.year % 100 === 0) return false;
      return this.year % 4 === 0;
  }
}

const myDate = new MyDate(2020,7,10);
console.log("es año bisiesto?", myDate.isLeapYear);
