//Closure

function foo() {
    let x = 10;
    // Closure, capturing environment of `foo`.
    function bar() {
        return ++x;
    }
    return bar;
}
// Call to `foo` returns `bar` closure.
let bar = foo();

console.log(bar()); 
console.log(bar()); 
console.log(bar()); 