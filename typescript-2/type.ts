//Type: Easy way to refer to the different properties + function that a value has
//let a : number = 10;
//let a = 10;
//labeling the type of data type of single value have

//a = "subham";
//This Create An Error  Type 'string' is not assignable to type 'number'
var a: number;
a = 10;
console.log(a);

//but in line no 10 does not but why?

//Here the ts complier codebase know what the variable is assigned hover over the variable today
const today = new Date();
today.getMonth();

//For Object
const person = {
  age: 20,
};
person.age = 21;

//For Class Hover Red
class color {}

const red = new color();

//Type Annotations + Type interFace
//Code  we add to tell Typescript what type of value a variable will refer to --Developer type the refer to tell typescript
//Typescript Automatic  tries to figure out what type of value a  variable refers tp  --Typescript guesses the type

//Type Annotations
let apples: number = 5;
let speed: string = "fast";

let nothingMuch: null = null;
//Primitive Types : string ,number, boolean , symbol , null, undefined, date , void
//Non-Primitive Types: fucntion , array, class , object

let nothinggot: undefined = undefined;
let hasCode: boolean = true;
let now: Date = new Date();

//Now for Non-Primitive

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5];

//Classes

class Car {}

let lowerCr: Car = new Car();

//Object

let point: { x: number; y: number } = {
  x: 20,
  y: 30,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// logNumber('helo')
logNumber(20);

//if declaratio and intizalization on the same line
//then the ts will figure out the type of color for us

const colorr = "red";

//TYPE ANNOTATIONS WHEN TO USE?

//1)Function that return the any type
const json = '{"x": 10, "y":20}';
const co = JSON.parse(json);
console.log(co);
//This will return any JSON parse return any

//   JSON.parse('4') = 4

//2)Delayed Intilization
let words: string[] = ["red", "green", "blue"];
let foundWords: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWords = true;
  }
}

//when type inference does not support
//3) Variable whose type  cannot be iniferred Correctly
//Loop through array put assign number greater than 0 in or false
//here two type are defined and are assigning in the numberAbovezero variable
let number: number[] = [-10, -1, 1];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    numberAboveZero = number[i];
  } else if (number[i] < 0) {
    numberAboveZero = numberAboveZero;
  } else {
    console.log("None");
  }
}

//Type Annotations of Functions
const add: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

//Type Annotations of Function
const add2 = (a: number, b: number): number => {
  return a + b;
};
//Type inference
const add3 = (a: number, b: number) => {
  return a + b;
};

//Void - not returning any thing
const logger = (message: string): void => {
  console.log(message);
};

//Never Expected the function to return

const logger2 = (message: string): void => {
  if (!logger2) {
    throw new Error(message);
  }
};

//Destructing

const weather = {
  date: new Date(),
  time: 20,
};
//{date,time} --> do the annotations
const todayWeather = (weather: { date: Date; time: number }): void => {
  console.log(weather.date);
  console.log(weather.time);
};

todayWeather(weather);

//Object
const profile = {
  name: "alex",
  age: 20,
  coord: {
    lot: 0,
    lat: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//Destruct the profile Object
const { age, name }: { age: number; name: string } = profile;
//Nested Properties
const {
  coord: { lot, lat },
}: { coord: { lot: number; lat: number } } = profile;
