//Parallel Execution

function getOne() {
    return Promise.resolve(1)
}
function getTwo() {
    return Promise.resolve(2)
}
function getThree() {
    return Promise.resolve(3)
}
function getFour() {
    return Promise.resolve(4)
}
function getFive() {
    return Promise.resolve(5)
}

function compose() {
    return Promise.all([
        getOne(), getTwo(), getThree(), getFour(), getFive()
    ]);
}

function race() {
    return Promise.race([
        getOne(), getTwo(), getThree(), getFour(), getFive()
    ]);
}

compose().then(
    function (res) {
        console.log(res);
    }
)

race().then(
    function (res) {
        console.log(`Race ${res}`);
    }
)
