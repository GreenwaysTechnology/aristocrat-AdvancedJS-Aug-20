/**
 * 
 * function as parameter to another function
 * 
 */

//a=x,b=y;
function add(a, b) {
    console.log(a + b);
}
add(10, 10);
let x = 10;
let y = 90;
add(x, y);


//function declaration
/**server=function () {
    console.log('Http Server');
}**/
/**
 * 
 * server=httpServer
 */
function createServer(server) {
    //invoke
    server();
}
//function calling
//what can be a parameter : string,number,boolean,undefined,null,nan,infinity,function,null,object
createServer(function () {
    console.log('Http Server');
});

let httpServer = function () {
    console.log('Http Server');
};
createServer(httpServer);

//////////////////////////////////////////////////////////////////////////////
//ars and parametes, return values

function createNetServer(server) {
    let status = server('TCP  Server'); //caller
    console.log(status);
}
createNetServer(function (name) {
    console.log(name);
    return 'Socket Ready to accept incoming Connection';
});

let netServer = function (name) {
    console.log(name);
    return 'Socket Ready to accept incoming Connection';
}
createNetServer(netServer);
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

let createDNSServer = function (server) {
    let status = server('DNS  Server'); //caller
    console.log(status);
};
createDNSServer(function (name) {
    console.log(name);
    return 'DNS Ready to accept incoming Connection';
});

let dnsServer = function (name) {
    console.log(name);
    return 'DNS Ready to accept incoming Connection';
}
createDNSServer(netServer);