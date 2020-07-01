//Object Oriented JavaScript Lesson1
//  * Lesson 1 - Objects in Depth
//    * primitive types are immutable and passed by value copy
//    * object are mutable If you pass an object into a function, Javascript passes a reference to that object"
//    * this in method points to owner object of that method
//    * How the function is invoked determines the value of this inside the function
//    * 'debugger' statement for debugging
//    * for standalone functions 'this' refers to window object
//    * 'var' and function declared globaly become members of window object
//    * Object.keys(obj) and Object.values(obj)


//const o1 = {};
const o1 = new Object();
o1.a1 = 'a1';
o1['b 1'] = 'bbb 111';
delete o1.a1;
delete o1['b 1'];

// string number boolean are 'passed by value'
let v1 = 'vvv 111';
function changeV1(v1) { v1 = 'changed vvv 111'; }
changeV1(v1);
console.log(v1);

// objects are 'passed by reference'
let v2 = { value: 'vvv 222' };

// "object passed by reference BUT reference passed as a copy :D"
// thus when modifying internals effects do take place
function changeV2Value(v2) { v2.value = 'changed vvv 222'; }
changeV2Value(v2);
console.log(v2);
// and when changing 'refered to object' effects do not take place
function changeV2(v2) { v2 = { value: 'new v2 object' }; }
changeV2(v2);
console.log(v2);

// objects are assigned as references too
let v3 = v2;
v3.value = 'vvv 333';
console.log(v2);

// compares wheter the same object or not
v2 === v3; // same
v2 == v3; // same
let v4 = { value: 'vvv 333' };
v3 == v4; // not same
v3 === v4; // not same

// methods
// Depending on how a function is called, this can be set to different values
let o2 = { v:'o2', m:function optionalFunctionName(){ console.log('o2 f'); }}
o2.m();
o2['m']();

let o3 = { v:'o3', m:function(){ console.log(`object value v:${this.v} accessed through objects method.`); }}
o3.m();
o3['m']();

// How the function is invoked determines the value of this inside the function

let dictionary = {
    name1: 'value1',
    name2: 'value2',
    name3: 'value3',
    name4: 'value4',
};
Object.keys(dictionary);
Object.values(dictionary);