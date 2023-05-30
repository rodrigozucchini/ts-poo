console.log("MyMath JS", Math.PI);
console.log(Math.max(1,2,3,4,5,6));


class MyMath {
  static readonly PI = 3.14; // con static puedo usarlo como javascript lo usa normal, yt con readonly evito el cambio despues

  static max (...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, item)=> max >= item ? max: item, numbers[0]);
  }

}

console.log("MyMath TS", MyMath.PI);
//MyMath.PI = 3.14; no puedo cambiarlo porque use readonly
console.log("MyMath max", MyMath.max(1,21,5,9,8,9));
console.log("MyMath max", MyMath.max(-5,-10,-50, -2));
