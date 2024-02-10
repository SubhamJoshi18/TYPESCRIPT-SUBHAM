//This is CRASH COURSE OF class in Javascript
//used for react native, nestjs, or ....more
//ES6
class User {
  //add properites and function
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }

  capitalUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const subham = new User("joshi", "@gmail.com", "hello");
console.log(subham.encryptPassword());
console.log(subham.capitalUsername());

//Behind The Scene

//Prototype Inheritance || class Inheritance

class People {
  constructor(name) {
    this.name = name;
  }
  logme() {
    console.log(`Username is ${this.name}`);
  }
}

//Super keyword on an object literal or class or can invoke
//the parent constructor superclass constructor
class Teacher extends People {
  constructor(name, age, gender) {
    super(name);
    this.age = age;
    this.gender = gender;
  }
  addCourse() {
    console.log(`A new course was added by ${this.name}`);
  }
}
//eate an instance of an object that has a constructor function. On calling the constructor function with the 'new' operator, the following actions are taken: A new empty object is created.
const subham3 = new Teacher("subu", "subh@gmail.com", "123");
console.log(subham3.addCourse());
console.log(subham3.logme());
//instancesOf === check
console.log(subham3 instanceof Teacher);
console.log(subham3 === Teacher);
