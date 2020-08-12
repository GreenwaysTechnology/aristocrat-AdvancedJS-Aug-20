//async function
async function getName() {
    return 'Hello Subramanian' // return Promise.resolve('Hello Subramanian')
}
getName().then(function (res) {
    console.log(res);
})