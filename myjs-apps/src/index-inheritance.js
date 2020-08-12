//es 5 proto type 

Object.prototype.xxx ='xxxx'

function Person(name = 'default') {
    console.log('person is called')
    this.name = name;
}
//add shared property inside protot
Person.prototype.sayGreet=function(){
    return 'greetr';
}
function Employee(name){
  //call base class constructor.Person
  Person.call(this,name);
}
//link/inherit two classes
Employee.prototype = Object.create(Person.prototype);

//create Object 
let emp = new Employee('Subramanian')
console.log(emp.xxx)

/////////////////////////////////////////////////////////////////////////////////

Object.prototype.foo = 'foo'

class Account{
    constructor(balance=0){
        console.log('Account is called')
        this.balance =balance;
    }
}
Account.prototype.calculateInterest = ()=>1000;

class SavingsAccount extends Account{
    constructor(balance){
        super(balance)
        console.log('SavingsAccount is called')
    }
}
let sb = new SavingsAccount(1000);
console.log(sb.balance,sb.foo,sb.calculateInterest())
