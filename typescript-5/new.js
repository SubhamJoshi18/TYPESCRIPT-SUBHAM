var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class is blueprint to create an object with some fields value and method function to represent a thing
var Vechile = /** @class */ (function () {
    function Vechile() {
    }
    Vechile.prototype.drive = function () {
        console.log("Car is driving");
    };
    Vechile.prototype.honk = function () {
        console.log("Beep");
    };
    return Vechile;
}());
//we are creating a instance of class
var vechile = new Vechile();
vechile.drive();
vechile.honk();
/*
An instance of a class is an object. It is also known as a class object or class instance. As such, instantiation may be referred to as construction. Whenever values vary from one object to another, they are called instance variables

*/
//Inheritance
//fourwheeler can also to what vechile can do
//so instead of copying the everything from Vechile
//we can extned
var fourWheeler = /** @class */ (function (_super) {
    __extends(fourWheeler, _super);
    function fourWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    fourWheeler.prototype.drive = function () {
        console.log("Boooom");
    };
    return fourWheeler;
}(Vechile));
var four = new fourWheeler();
four.drive();
four.honk();
