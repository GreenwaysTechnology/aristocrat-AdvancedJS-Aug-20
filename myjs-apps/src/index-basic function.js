//functions. wraper around instructions.

/**
 * 1.basic declartion
 * 2.function invocation
 * 3.parameters and args
 * 4.return values
 *  */

//function declaration

function sayHello() {
    console.log('Hello!!!');
}
sayHello();

//parameeters and args
//name is args; default arg
function sayHai(name = 'default') {
    //   var name =  name || 'default'
    console.log(name);
}
//parameters
sayHai('Subramanian');
sayHai();

//var args  ; ... rest operator
function log(author, ...logs) {
    //variable args : vars
    // console.log(arguments);
    console.log(logs);
    logs.forEach(function (l) {
        console.log(author, l)
    });
    logs.map(function (l) {
        return l.toUpperCase();
    }).forEach(function (l) {
        console.log(l)
    });

}
log('ibm', 'Page1', 'warning')
log('google', 'Page2', 'warning', 'in the line no 24')
/////////////////////////////////////////////////////////////////////////////////
function square(num = 0) {
    return num * num;
}
console.log(square(10, 10));
console.log(square());

function login(userName = 'admin', password = 'admin') {
    if (userName === 'admin' && password === 'admin') {
        return true;
    }
    //return false;
    return; // undefined => false
}
login('admin', 'xx') ? console.log('Login success') : console.log('Login failed');