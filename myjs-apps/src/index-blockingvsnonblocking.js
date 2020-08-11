
//nonblocking and async :using timers

//blocking 
function sum() {
    console.log('sum')
}
function divide() {
    console.log('divide')
}
function delay(handler) {
    //delayed logic : async code
    setTimeout(handler, 5000)
}
sum();
delay(function () {
    console.log('delayed function');
});
divide();
