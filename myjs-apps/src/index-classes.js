


//es 6 classes to create object
// function Employee(){
//     this.id =1;
//     this.name ='Subramaian'
//     this.calculateSalary=function(){
//         return 1000
//     }
// }
// class Employee {
//     //direct initalization
//     id = 1;
//     name = 'Subramaian'
//     calculateSalary() {
//         return 1000
//     }
// }
// let emp = new Employee()
// emp.name="ram"
// console.log(emp);
class Employee {
    //direct initalization
    constructor(id = 0, name = 'default') {
        this.id = id;
        this.name = name;
    }
    calculateSalary() {
        return 1000
    }
}
let emp = new Employee(2, 'ram')
emp.name = "ram"
console.log(emp);

