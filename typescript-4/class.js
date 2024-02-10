//InterFaces
//InterFace + classes
//Create a new type descibing the property  names and values type of an object
var oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
};
var printVechile = function (_a) {
    var name = _a.name, year = _a.year, broken = _a.broken;
    console.log("The car is ".concat(name, " and it was released in ").concat(year, " and now it is currently the broken ").concat(broken));
};
console.log(printVechile(oldCivic));
