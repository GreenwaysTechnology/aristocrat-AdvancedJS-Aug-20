"use strict"

function sayHello(name = 'default', location = 'default loc') {
    console.log(`${this.message} ${name} ${location}`)
    return this; //value of this , will determine that function belongs to whom.
}

//declare owner/caller : object
let greetings = {
    message: 'Hello'
};

sayHello.call(greetings, 'Subramanian', 'Coimbatore')

//change owner
let hai = {
    message: 'Hai'
}
sayHello.call(hai);

//window.message='window message'
//sayHello.call(window);

//apply
function getStocks(...stocks) {
    console.log(this.name, stocks)
}
const google = {
    name: 'Google Stock'
};

getStocks.apply(google, [{ id: 1, value: 20 }])

//bind
let newGreeterref = sayHello.bind(greetings, 'John', 'Delhi');

setTimeout(() => newGreeterref(), 1000)




