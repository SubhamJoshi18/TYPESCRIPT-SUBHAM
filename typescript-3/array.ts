//Array with TypeScript
//Typed Array =  array where each element is consistent type of value
let character: string[] = ["subham", "hello"];
console.log(character);
//Now try putting the number or any boolean value in array
//character = [12]
const carryMarker: any[] = [];
carryMarker.push(2);
carryMarker.push(true);
carryMarker.push({ name: "subham" });
carryMarker.push(new Date());
carryMarker.push(["stringg"]);
console.log(carryMarker);

//Typed Array
const subham = ["hello", "world"];
const one = subham[0];
//hover over the one then ts will manually infer that index of 0 is string to the variable oen

carryMarker.map((car: string) => {
  return car.toUpperCase();
});

//Type inference in multiple array
const dateing: (Date | String)[] = [new Date(), "2030-10-10"];
//const dateing = [Date | string] ;

//Array - Tuples

//Tuples
//Array like Structure wheree each elemet represents some property of a record

const drink = {
  color: "brown",
  cabornated: true,
  sugar: 40,
};

//We lost properties then we have to memorzie what is

type drinkk = [string, boolean, number];
//string represent the color and boolean represent carbonated, number represent the sugar
const pepsi: drinkk = ["brown", true, 40];
const dew: drinkk = ["green", true, 30];
//Consistent order or series of element
//order of elemet in the tuple
pepsi[0] = 40;
//now we are getting error
//We are turning array in tupple instead of refering the type annotations to variable
//we define an series of orderd data types

//Tuples have Fixedd series of element fixed Length
//const {color, cabornated, sugar} : {color:string, carbonated:boolean,sugar:number} = drink
