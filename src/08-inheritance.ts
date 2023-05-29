export class Animal {
  constructor(public name: string) {}

  move() {
    console.log("Movin along!");
  }

  greeting() {
    return `Hello I am ${this.name}`
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
      console.log("Woof");
    }
  }
}


const fifi = new Animal("fifi");
console.log(fifi.greeting());
console.log(fifi.move());

const chage = new Dog("chage", "Nico");
console.log(chage.greeting());
console.log(chage.move());
console.log(chage.woof(5));
console.log(chage.owner);
