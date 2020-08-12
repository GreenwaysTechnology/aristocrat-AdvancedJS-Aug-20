//object destrucing

// function  getEmployee(employee){
//     console.log(employee.id)
//     console.log(employee.name)
// }

// function getEmployee(employee) {
//     const { id, name } = employee;
//     console.log(id)
//     console.log(name)
// }
// function getEmployee({id,name}) {
//     console.log(id)
//     console.log(name)
// }
const getEmployee = employee => {
    const { id, name } = employee;
    console.log(id)
    console.log(name)
}
getEmployee({ id: 1, name: 'foo' })

const { log } = console;

// const getStock = (value, symbol) => {
//     return {
//         value: value,
//         symbol: symbol
//     }
// };
// const getStock = (value, symbol) =>({
//         value: value,
//         symbol: symbol
// });
const getStock = (value, symbol) =>({
    value,
    symbol
});
log(getStock(100, 'GOOGLE'))
