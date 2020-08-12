
function getUser() {
    let fakeUser = null
    let error = {
        code: 500,
        message: 'User not found!'
    };
    //biz logic
    if (fakeUser) {
        return Promise.resolve(fakeUser)
    } else {
        return Promise.reject(error);
    }
}

function login(fakeUser) {
    let error = {
        code: 500,
        message: 'Login failed'
    };
    let success = {
        code: 200,
        message: 'Login success'
    };
    //biz logic
    if (fakeUser.name === 'admin') {
        return Promise.resolve(success)

    } else {
        return Promise.reject(error);
    }
}
function showPage(status) {
    let guestPage = {
        message: 'Welcome to Guest'
    };
    let adminPage = {
        message: 'You are Admin!'
    };
    //biz logic
    if (status.code === 200) {
        return Promise.resolve(adminPage);

    } else {
        return Promise.reject(guestPage);

    }
}


//main method
// function start() {
// getUser().then(
//     function (res) {
//         console.log(res);
//     }
// ).catch(function (err) {
//     console.log(err);
// })
// }

async function start() {

    try {
        let user = await getUser();
        let status = await login(user);
        let page = await showPage(status);
        console.log(user, status, page);
    }
    catch (err) {
        console.log(err)
    }
    finally {
        console.log('done');
    }
}
start()




