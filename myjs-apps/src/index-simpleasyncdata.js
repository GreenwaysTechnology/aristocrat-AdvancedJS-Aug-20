
const customers = [
    { id: 1, name: 'A1' },
    { id: 2, name: 'A2' },
    { id: 3, name: 'A3' },
    { id: 4, name: 'A4' },
    { id: 5, name: 'A5' }
];
function findAllCustomers(callback) {
    //return customers data async
    setTimeout(callback, 5000, customers);
}
//api
function fetchCustomers() {
    console.log('start')
    findAllCustomers(function (customers) {
        console.log(customers);
    });
    console.log('end')
}
fetchCustomers();