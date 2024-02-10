//class is blueprint to create an object with some fields value and method function to represent a thing
class Vechile {
  //This is properties values
  // color:string;
  // constructor(color: string) {
  // this.color = color;
  // }

  constructor(public color: string) {}
  //This is function
  public drive(): void {
    console.log("Car is driving");
  }

  protected honk(): void {
    console.log("Beep");
  }
}

//we are creating a instance of class
const vechile = new Vechile("red");
vechile.drive(); //We cannot allow to call drive because it is protected and can be invoke only within its class and child class
vechile.honk();
/*
An instance of a class is an object. It is also known as a class object or class instance. As such, instantiation may be referred to as construction. Whenever values vary from one object to another, they are called instance variables

*/

//Inheritance
//fourwheeler can also to what vechile can do
//so instead of copying the everything from Vechile
//we can extned
//by default chai public
//We cannot overRidden the access Modifier of parent class in child class
class fourWheeler extends Vechile {
  drive(): void {
    console.log("Boooom");
  }

  private strting(): void {
    console.log("UMMMMMMMMM");
  }
  startcar() {
    this.strting();
    this.honk();
  }
}
const four = new fourWheeler();
four.honk();
four.drive();

//Public | Private | Protected
