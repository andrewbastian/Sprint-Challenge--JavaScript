// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback
  * In the body of the function return the callback with the two parameters that you created
*/
const name = [{first_name: 'andrew', last_name: 'bastian'}];
let myNames = name.map(me => `${me.first_name} ${me.last_name}`);
console.log(myNames);

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (x,y){
  return (x + y);
}
console.log(add(1,2));

function multiply (x,y){
  return (x*y);
}
console.log(multiply(2,2));

function greet (first_name, last_name){
 return (`hello ${this.first_name} ${this.last_name} ,nice to meet you!`)
}
console.log(greet());
/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

////  nestedfunction() can access can access the variable 'internal' because all functions in JS have the ability to access the scope above the nested function.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
