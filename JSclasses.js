const car1 ={model:'A', color:'Blue',Price:'450000'}
const car2 ={model:'B', color:'Red',Price:'500000'}
const car3 ={model:'C', color:'Orange',Price:'650000'}
// Key structure is same in all object. Blue print of the object is same
// If need to make 200 cars like the above, we can make multiple object from it
// Using this technique --> Keys are written in the structure part only once
// Just have to pass the values of each key for a particular object
// Easier to manage multiple object and is called as OPP (Object Oriented Programming)
// Coding - Object Oriented Programming
// Example
// class ClassName {
//     constructor() { ... }
// }
// special function called constructor function to create an object
 // Example 2
 class Car {
    constructor(name,color,year) {
        this.name = name;
        this.year = year;
        this.color = color;
    }
 } // keys belong to the prototype. this keyword is used specify the key that belongs to that prototype
 const myCar1 = new Car("Ford",2013,"Red");
 const myCar2 = new Car("Audi", 2018,"Yellow");
 
 console.log(myCar1,myCar2)


