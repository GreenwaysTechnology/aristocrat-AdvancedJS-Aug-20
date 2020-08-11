//var,let and const
//types -number,string,boolean,undefined,function,object
//literals -number,NaN,infinity,string,boolean,undefined,function,null,object

//strings : '',"",``
//var firstName="Subramanian";
let firstName = "Subramanian";
console.log("firstName " + firstName);
console.log("firstName ", firstName);
console.log('firstName ' + firstName);
//es 6 : template literal
console.log(`firstName  ${firstName}`);

//numbers
let salary = 1000;
console.log(`Salary  ${salary}`);

//undefined
let totalWorkings;
console.log(`totalWorkings  ${totalWorkings}`);
//NaN : it is runtime error.

let totalSalary = salary * totalWorkings;

console.log(`Total Salary  ${totalSalary}`);

//infinty  div/ 0
let avgSalary = salary / 0;

console.log(`Avg Salary  ${avgSalary}`);

//booleans
let isWorking = true;
console.log(`IS Working ${isWorking}`);


function Employee() {

}
//objects
let customer = {
    id: 1,
    name: 'subramanian'
}
let emp = new Employee();

let employee = null;
employee = new Employee();

//Basic operators
//==,=== : 

let x = "10";
let y = 10;
let result = x == y;
let result1 = x === y;
console.log(`The Result is ${result} ${result1}`)

//Advanced booleans:
/**
 * in js everthing is true expect the following values
 * 1.boolean false
 * 2.0
 * 3."" empty string
 * 4.NaN
 * 5.undefined
 * 6.null
 */

let counter = 0;
if (counter) {
    console.log('counter is true')
} else {
    console.log('counter is false')
}
//using tenary operator
counter ? console.log('counter is true') : console.log('counter is false')

//|| -- 1 || 0 => true

//booleans
let hasProject = true;
let status = isWorking || hasProject;
console.log(`Status ${status}`)

/**
 * incase of or operator
 *  if first operand is true,the result would be the first operand,else the result 
 * would be second one.
 */
let start = 0;
let gameStatus = start || 10; //true / false

console.log(`gameStatus ${gameStatus}`)

const pi = 90;
//pi = 10;
console.log(pi);




