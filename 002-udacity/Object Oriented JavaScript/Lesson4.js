///////////////////////////////////////////////
/*/
A mixin is a technique that copies data and functionality from a source object 
    (or source objects) to a target object. We can use ES6's Object.assign() to 
    return a target object with properties from one or more source objects "mixed into" 
    that target object.
/*/

const duck = {
    hasBill: true
};
const beaver = {
    hasTail: true
};
const otter = {
    hasFur: true,
    feet: 'webbed'
};
const platypus = Object.assign({}, duck, beaver, otter);
console.log(platypus);
// { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }

///////////////////////////////////////////////
function City(name, population) {
    this.name = name;
    this.population = population;
    
    this.identify = function () {
        console.log(`${this.name}'s population is ${this.population}.`);
    };
}
const sanFrancisco = new City('San Francisco', 870000);


/*/
A factory function is a function that returns an object, but isn't itself a class or 
    constructor. As such, we invoke a factory function as a normal function without using 
    the new operator. Using a factory function, we can easily create object instances without 
    the complexity of classes and constructors!
/*/
function Basketball(color) {
    return {
      color: color,
      numDots: 35000
    };
}

/*/
A functional mixin is a composable factory function that receives a _mixin_as an argument, 
    copies properties and methods from that mixin, and returns a new object.
/*/
function CoffeeMaker(object) {
    let needsRefill = false;
  
    return Object.assign({}, object, {
        pourAll: function () {
            needsRefill = true;
        },
        isEmpty: function () {
            return needsRefill;
        }
    });
}

///////////////////////////////////////////////
/*/
Module Pattern
/*/
let o = {
    name: (function(){
        let _name = "Eugene";

        return {
            get: function() {
                return _name;
            },
            set: function(name) {
                _name = name;
            }
        };
    }())
};

///////////////////////////////////////////////
/*/
Revealing Module Pattern
/*/
let person = (function () {
    let privateAge = 0;
    let privateName = 'Andrew';
  
    function privateAgeOneYear() {
      privateAge += 1;
      console.log(`One year has passed! Current age is ${privateAge}`);
    }
  
    function displayName() {
      console.log(`Name: ${privateName}`);
    }
  
    function ageOneYear() {
      privateAgeOneYear();
    }
  
    return {
      name: displayName,
      age: ageOneYear
    };
  })();

