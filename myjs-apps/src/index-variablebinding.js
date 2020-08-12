//static scope.

var a = 10;

function print_a() {
    console.log(`print_a function ${a}`);
}

function run() {
    var a = 100;
    console.log(`run method ${a}`);
    print_a()
}
run();