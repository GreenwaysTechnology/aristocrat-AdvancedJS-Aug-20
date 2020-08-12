"use strict"


function sayHello() {
    return this; //value of this , will determine that function belongs to whom.
}
console.log(sayHello());


function fun1() {

    console.log('fun 1')
    function fun2() {
        console.log('fun2')
        return this;
    }
    console.log(fun2());

    return this;
}
console.log(fun1());
