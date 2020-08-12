//has-a

class Order {
    constructor(orderId = 'A0001') {
        this.orderid = orderId;
    }
}
class Customer {
    constructor(name = 'default', order = new Order()) {
        this.name = name;
        this.order = order; //has-a
    }
}
let customer = new Customer('Subramanian',new Order('B001'))
console.log(customer)