
// const customers = [
//     { id: 1, name: 'A1' },
//     { id: 2, name: 'A2' },
//     { id: 3, name: 'A3' },
//     { id: 4, name: 'A4' },
//     { id: 5, name: 'A5' }
// ];
let customers = null;
const errors = "Customer not Found!!!";

function findAllCustomers(successcallback, failurecallback) {
    //biz logic , data checking
    if (customers) {
        setTimeout(successcallback, 5000, customers);
    } else {
        //handle errors
        setTimeout(failurecallback, 5000, errors);
    }
}
//api
function fetchCustomers() {
    findAllCustomers(function (customers) {
        console.log(customers);
    }, function (err) {
        console.log(err);
    });
}
fetchCustomers();