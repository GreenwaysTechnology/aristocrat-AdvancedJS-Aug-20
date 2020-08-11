// how to declare function?
/**
 * 1. function defintion declaration
 * 2. function is declared and assigned to a variable.
 */

// 1. function defintion declaration

function sum(no1 = 0, no2 = 0) {
    return no1 + no2;
}
//invocation
console.log(sum(1, 2));

//function is declared and assigned to a variable.
//ways
//1. with function name
// let multiply = function multiplyfunc() {
//     //function body
//     let result = 10 * 10;
//     console.log(`The Result is ${result}`);
// };
//multiply();
//multiplyfunc();
//anonmous function : function with out name
let multiply = function (x = 0, y = 0) {
    //function body
    let result = x * y;
    //console.log(`The Result is ${result}`);
    return result;
};
console.log(multiply(12, 90));
