//arrow function 

//old syntax
// const greet = function () {
//     console.log('greet');
// };
// greet()
//arrow syntax;
const greet = () => {
    console.log('greet');
};
greet();
//if function has single of body.remove {}
const sayHai = () => console.log('hai');
sayHai();

//parameters and args 
//multi parameters 
const add = (a = 0, b = 0) => {
    const result = a + b;
    console.log(result);
};
add(10, 10)
//single parameter, no default value, remove () and 
const counter = count => console.log(count);
counter(10)

const substract = (a = 0, b = 0) => {
    const result = a + b;
    return result;
};
console.log(substract(10, 10))
//only return no extra body
const multiply = (a = 0, b = 0) => a * b;
console.log(multiply(10, 10))
///////////////////////////////////////////////////////////////////////////////

//arrow and funciton as parameter
const createServer = server => server();
createServer(() => console.log('Http Server'));
let httpServer = () => console.log('Http Server');
createServer(httpServer);
//async api and arrow functions

const getUser = (resolve, reject) => {
    let fakeUser = {
        id: 1,
        name: 'admin'
    }
    let error = {
        code: 500,
        message: 'User not found!'
    };
    //biz logic
    if (fakeUser) {
        setTimeout(resolve, 1000, fakeUser)
    } else {
        setTimeout(reject, 1000, error)
    }
};
const login = (fakeUser, resolve, reject) => {
    let error = {
        code: 500,
        message: 'Login failed'
    };
    let success = {
        code: 200,
        message: 'Login success'
    };
    //biz logic
    if (fakeUser.name === 'admin') {
        setTimeout(resolve, 1000, success)
    } else {
        setTimeout(reject, 1000, error)
    }
};
const showPage = (status, resolve, reject) => {
    let guestPage = {
        message: 'Welcome to Guest'
    };
    let adminPage = {
        message: 'You are Admin!'
    };
    //biz logic
    if (status.code === 200) {
        setTimeout(resolve, 1000, adminPage)
    } else {
        setTimeout(reject, 1000, guestPage)
    }
};

getUser(fakeUser => {
    console.log('getUser');
    login(fakeUser, status => {
        console.log('login')
        showPage(status, admin => {
            console.log('Page')
            console.log(admin)
        }, guest => {
            console.log(guest);
        });
    }, err => console.log(err));

}, err => console.log(err));