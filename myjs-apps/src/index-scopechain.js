

//inside script
var x = 10;
var y = 20;

function foo(z) {
    //inside function
    let x = 100;
    return x + y + z;
}

let r = foo(30); // 150
console.log(r);

var a = 10;

function fun1() {

    console.log(`fun1 ${a}`);

    function fun2() {
        var a = 88888;

        console.log(`fun2 ${a}`);

        function fun3() {
            console.log(`fun3 ${a}`);
        }
        fun3()
    }
    fun2();

}
fun1()