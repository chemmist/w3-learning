//  * Lesson 3 - Classes and Objects
//    * constructor function
//      1. First letter capitalized to visually distinguish it from a regular function;
//      2. Use the new operator to invoke the function;
//      3. Rather than declaring local variables, constructor functions persist data with the this keyword;
//      4. Constructor functions in JavaScript should not have an explicit return value.
//    * new operator 
//      1. Creates a blank, plain JavaScript object;
//      2. Links (sets the constructor of) this new object to another object;
//      3. Passes the newly created object from Step 1 as the this context;
//      4. Returns this if the function doesn't return its own object.
//    * typeof obj, obj instanceof Constructor
//    * the value assigned to this is based on the object that invokes the method where this is defined.
//    * four ways to call functions: 
//      1. stadalone (this = window);
//      2. method (this = object);
//      3. new (this = newly created object);
//      4. f.call(obj),  f.apply(obj),  f.bind(obj) -
//         sets this to passed object and calls, calls, returns function respectively.
//    * each function has a prototype property, which is really just an object
//    * when new Constructor is invoked new object is linked to Constructor's prototype
//    * obj.hasOwnProperty('prop')  proto.isPrototypeOf(obj)  Object.getPrototypeOf(obj)
//    * constructor property
//    * inheritance, Object.create(prot) to create object with prototype set as prot

////////////////////////////////////////////////////
function SoftwareDeveloper() {
    this.favoriteLanguage = 'JavaScript';
}
let developer = new SoftwareDeveloper();
let otherDeveloper = { favoriteLanguage: 'JavaScript' };
console.log(developer);
developer instanceof SoftwareDeveloper;

////////////////////////////////////////////////////
function bark() {
    console.log('global bark.')
};
const dog = {
    bark: function () {
        console.log('Woof!');
    },
    barkTwice: function () {
          bark();
          this.bark();
    }
};
dog.barkTwice();

////////////////////////////////////////////////////
const mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function () {
        console.log(`${this.title} is a classic novel`);
    }
};
mockingbird.describe();
const pride = {
    title: 'Pride and Prejudice'
};
mockingbird.describe.call(pride);
mockingbird.describe.apply(pride);

/////////////////////////////////////////////////////
function invokeTwice(cb) {
    cb();
    cb();
}
const dog = {
    age: 5,
    growOneYear: function () {
        this.age += 1;
    }
};
const myGrow = dog.growOneYear.bind(dog);
console.log(dog.age);
invokeTwice(dog.growOneYear);
console.log(dog.age);
invokeTwice(myGrow);
console.log(dog.age);

/////////////////////////////////////////////////////
function Hamster() {
    this.hasFur = true;
}
let waffle = new Hamster();
let pancake = new Hamster();

Hamster.prototype.eat = function () {
    console.log('Chomp chomp chomp!');
};
waffle.eat();
pancake.eat();

Hamster.prototype = {
    isHungry: false,
    color: 'brown'
};
console.log(waffle.color);       // undefined
waffle.eat();                    // 'Chomp chomp chomp!'
console.log(pancake.isHungry);   // undefined

const muffin = new Hamster();
muffin.eat(); // TypeError: muffin.eat is not a function
console.log(muffin.isHungry);  // false
console.log(muffin.color);     // 'brown'

/////////////////////////////////////////////////////
function Phone() {
    this.operatingSystem = 'Android';
}
Phone.prototype.screenSize = 6;
const myPhone = new Phone();
console.log(myPhone.hasOwnProperty('operatingSystem'));    // true
console.log(myPhone.hasOwnProperty('screenSize'));         // false
console.log(Phone.prototype.hasOwnProperty('screenSize')); // true

/////////////////////////////////////////////////////
const rodent = {
    favoriteFood: 'cheese',
    hasTail: true
};
function Mouse() {
    this.favoriteFood = 'cheese';
}
Mouse.prototype = rodent;
const ralph = new Mouse();
const result = rodent.isPrototypeOf(ralph);
console.log(result); // true
const myPrototype = Object.getPrototypeOf(ralph);
console.log(myPrototype);
console.log(ralph.constructor);

/////////////////////////////////////////////////////
