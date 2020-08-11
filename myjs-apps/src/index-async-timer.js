
function delay(handler, timer = 1000) {
    let fakeData = `Hello! ${timer}`;
    setTimeout(handler, timer, fakeData);
}
delay(function (data) {
    console.log(data);
}, 5000);

delay(function (data) {
    console.log(data);
}, 4000);

delay(function (data) {
    console.log(data);
}, 0);

delay(function (data) {
    console.log(data);
}, 3000);
delay(function (data) {
    console.log(data);
}, 3000);

//setInterval
function tick(callback) {
    let timerId = setInterval(callback, 1000, Math.random());

    setTimeout(function () {
        clearInterval(timerId);
        console.log('stopped timer')

    }, 5000)
}
tick(function (data) {
    console.log(data);
})