//we write a piece of code in the function than
//we extend the class
//Decorator = //extend the functionality of class properties and method
//CLEAN Syntax
//Firt Enable
//Experimental Decorator true
//EmitDecorator... true
//extending feature grabbing the piece of code with function
//Decorator = Function Simply
//it extend the feature of class
//Decorator allow to add a new functionality to the object
//without altering the structure
function Logger(constructor: Function): void {
  console.log("Logging the data");
  console.log(constructor);
}
//Now add logger function to the class
//syntax @to use and invoke it

@Logger
class person2 {
  name: string = "subham";

  constructor() {
    console.log("Creating an constructor");
  }
}

// const PersonNew = new person2();
// console.log(PersonNew);

class car {
  drive(): void {
    console.log("Driving the car");
  }

  reverse(): void {
    console.log("Reversing the car");
  }
}

class toyota extends car {
  hello: car;
  constructor(hello: car) {
    super();
    this.hello = hello;
  }

  reverse(): void {
    console.log("Wow that is toyota");
  }
}

const Car6 = new toyota(new car());
Car6.drive();
Car6.reverse();
