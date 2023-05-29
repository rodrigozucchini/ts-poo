export class Animal {
  constructor(protected name: string) {} // protected privado con herencia

  move() {
    console.log("Movin along!");
  }

  greeting() {
    return `Hello I am ${this.name}`
  }

  protected doSomething() {
    console.log("dooo");
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
    ) {
      super(name);
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log("mooving as a dog");
    super.move();
  }
}




const chage = new Dog("chage", "Nico");
console.log(chage.woof(5));
//console.log(chage.doSomething()); // no podria acceder porque es protected
console.log(chage.move());
