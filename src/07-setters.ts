//Set
//Es parecido a un get, solo que este no retorna nada, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error.

//A set lo podemos usar para tener reglas de modificación para nuestros parámetros.


export class MyDate {
  constructor(
    private _year: number = 2000,
    private _month: number= 0,
    private _day: number= 1
    ){}

  get isLeapYear(): boolean { // con get se comporta como propiedad // todos los getters deben retornar algo
      if (this._year % 400 === 0) return true;
      if (this._year % 100 === 0) return false;
      return this._year % 4 === 0;
  }
  get month() {
    return this._month;
  }
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out');
    }

  }
}

const myDate = new MyDate(2020,10,10);
myDate.month = 50
console.log(myDate.month);

