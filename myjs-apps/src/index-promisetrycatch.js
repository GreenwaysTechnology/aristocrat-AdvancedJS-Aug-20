//Promise.resolve and Promise.reject


function getUser() {
    let fakeData = {
        id: 1,
        name: 'admin'
    };
    let error = {
        code: 500,
        message: 'User not found!'
    };
    if (fakeData) {
        return Promise.resolve(fakeData)
    }
    return Promise.reject(error)
}
getUser()
    .then(function (response) {
        console.log(response)
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () {
        console.log('done!')
    });
