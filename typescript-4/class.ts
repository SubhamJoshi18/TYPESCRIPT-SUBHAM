//InterFaces
//InterFace + classes
//Create a new type descibing the property  names and values type of an object

//interace = creating a new type strcuture
//wHILE USING INTERFACE THE IDENTIFIFER NAME SHOULD BE CAPITAL FIRST LETTER FIRST
//Creating a new type object Structure

interface Vechile {
  name: string;
  year: number;
  broken: boolean;
  time: Date;
}

interface Reporter {
  summary(): string;
}
//INTERFACE AND REQUESTING OBJECT COMPARE
//IT DOES NOT MATTER IF YOU HAVE EXTRA PROPERTIES IT WILL ONLY CHECK THE CODE YOU SET IN THE OBJECT AND CHECK THE INTERFACE AND QUALIFY IT
const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(name: string, year: 2000) {
    return `name is ${this.name} and ${this.year}`;
  },
};
/*
const printVechile = ({
  name,
  year,
  broken,
}: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(
    `The car is ${name} and it was released in ${year} and now it is currently the broken ${broken}`
  );
};

*/
//we have to satisfy the interface and ts loop through every properties
//and make sure that the requesting object have each properties refering to its annotations interface and it is satisfied

const printVechile = (vec: Reporter): void => {
  console.log(vec.summary());
};

//Fixing long type annotations thulo hudai jancha jati object ma properties cha ani duplicated Code huncha

//Reuseable

const drink2 = {
  color: "brown",
  carbonated: true,
  sugar: 29,
  summary(): string {
    return `${this.color}`;
  },
};

const printdrink = (dri: Reporter) => {
  console.log(dri.summary());
};

printVechile(oldCivic);
printdrink(drink2);
//interface is the gatekeeper
/*here two object drink2 and vechile has an
a valid function Summary kind of properties then
we have an gatekeepr or kind of thing we want to satisfy that object with interace
in interface Reporter says that there should be a 
function which return not void unknown or never but it
will return an string so this condition is valid
to two object cause drink2 and olcivic have their own
unique properties summary which return a string than
we can say it will satisfy to interface and can be used rather
duplicating it mulitple times



*/

/*

                          ------Object 1
                         |
                        |
                       |
 Interface xyz <------       Must satisfy with interface xyz
     |                 |
     |                 | 
     |                 |
     |                 |----Object2

| Some Function |


*/

//Restrict access to different Fucntion
