

function getUser(resolve, reject) {
    let fakeUser = {
        id: 1,
        name: 'admin'
    }
    let error = {
        code: 500,
        message: 'User not found!'
    };
    //biz logic
    if (fakeUser) {
        setTimeout(resolve, 1000, fakeUser)
    } else {
        setTimeout(reject, 1000, error)
    }

}
function login(fakeUser, resolve, reject) {
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
        setTimeout(resolve, 1000, success)
    } else {
        setTimeout(reject, 1000, error)
    }
}
function showPage(status, resolve, reject) {
    let guestPage = {
        message: 'Welcome to Guest'
    };
    let adminPage = {
        message: 'You are Admin!'
    };
    //biz logic
    if (status.code === 200) {
        setTimeout(resolve, 1000, adminPage)
    } else {
        setTimeout(reject, 1000, guestPage)
    }
}

getUser(function (fakeUser) {
    console.log('getUser');
    login(fakeUser, function (status) {
        console.log('login')
        showPage(status, function (admin) {
            console.log('Page')
            console.log(admin)
        }, function (guest) {
            console.log(guest);
        });

    }, function (err) {
        console.log(err);
    });

}, function (err) {
    console.log(err);
});