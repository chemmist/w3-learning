//Object Oriented JavaScript Lesson2
//  * Lesson 2 -  Functions and Runtime
//    * When a function is run, it creates its own scope, 
//      The scope of a function includes :
//      The code inside a function has access to: 
//        1. The function's arguments.    
//        2. Local variables declared within the function.    
//        3. Variables from its parent function's scope.     
//        4. Global variables.
//    * variable shadowing - local scope variables with same name shadow higher scope variables
//    * closure - process of a function retaining access to its scope is called a closure
//      The combination of a function and the lexical environment within which that function was declared.
//    * imediately infoked functions, can be used to return functions with returning functions scope, thus creating private variables

///////////////////////////////////////
function remember(number) {
    return function() {
        return number;
    }
}
const returnedFunction = remember(5);
console.log( returnedFunction() );

///////////////////////////////////////
function counter () {
    let count = 0;
    return function() 
    {
      count++;
      console.log(count);
    }
  }
  let counter1 = counter();
  let counter2 = counter();
  counter1(); counter1(); counter1();
  counter2(); counter2(); counter2();

///////////////////////////////////////