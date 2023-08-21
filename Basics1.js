//Variables and Operators
console.log("Rishab")
let a = 4, b = 6;
let c = a + b;
let ds = console.log(c * 10);
ds = c*10+28;
console.log(ds);
let f = "Rishab Das";
console.log(f)
let d = c + 6.8, e = " Dip";
console.log(d + e + " Das")
var i = 12;
console.log(d + i)
console.log(a + b - c * d)
//Constants(const) using with Array and Objects
//let ar = ["XUV", "Audi", "Mercidez", "BMW", "Alto"];
const ar = ["XUV", "Volvo", "BMW", "Audi", "Alto"]
console.log(ar)
ar[2] = "Suzuki";
console.log(ar)
ar.push("BMW")
ar.push("Bugatti")
ar[2] = "Honda"
console.log(ar)
//Objects
//ex 1
const car = { type: "Fiat", model: "500", color: "Blue" };
console.log(car)
car.color = "White";
console.log(car)
car.owner = "Nilesh Kimar";
console.log(car)
//ex 2
const food = { type: "breakfast", price: "Rs 35", time: "9:00 am" };
console.log(food);
food.price = "Rs 70";
food.type = "lunch";
food.dish = "meal";
console.log(food);
//ex 3
const arra = ["apple", "banana", "lemon", "Orange"];
console.log(arra);
arra[4] = "Waterlemon";
console.log(arra);
arra.push("kiwi");
console.log(arra);
arra[2] = "mango";
console.log(arra);
arra.pop();
arra.pop();
console.log(arra);
arra.push("Kiwi");
console.log(arra);
let as = "Rishab Das";
arra.push(as);
console.log(arra);
//const using with block
const ba = 128;
{
  const ba = 64;
  console.log(ba);
}
console.log(ba);
var r =16;
{
  const r =16;
  console.log(r);
}
console.log(r);
//eg 2 of Block
const x =3;
let is = 3;
{
  const x=3;
  let is = x;
  console.log(is, " ", x);
}
console.log(x, " ", is);
//Arithmatic & Assignment operators
carName = "Volvo ";
var carName;
carName += 4;
console.log(carName);
const pop = 16;
console.log(pop);
alert (pop);
var abs= 'A ';
var bas = ' B ';
var sab = abs < bas;
console.log(sab);
sab = abs <= bas;
console.log(sab);
alert (abs + bas + sab);
//Concatination Operators
let j="Rishab ";
j += "Das";
console.log(j);
let line = "What a great day ";
line += "it was yesterday."
console.log(line);