//basic promise creation
/**
 * promise are by default async
 * Promise Object is created in two ways
 */
//callback style
/**
function getUser(callback) {
    //async api
    let fakeData = {
        id: 1,
        name: 'admin'
    };
    setTimeout(callback, 0, fakeData);
}
getUser(function(data){
    console.log(data);
})
 */
function getUser() {
    //async api
    let fakeData = {
        id: 1,
        name: 'admin'
    };
    return Promise.resolve(fakeData);
}
//get Promise
//result
console.log('start')
let promiseResult = getUser();
console.log('going');
promiseResult.then(function (response) {
    console.log(response);
})
console.log('end')
