function getUser() {
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
getUser()
    .then(
        function (fakeUser) {
            console.log('get User')
            login(fakeUser).then(
                function (status) {
                    console.log('login ')
                    console.log(status);
                }
            ).catch(function (error) {
                console.log(error);

            });

        }
    )
    .catch(function (err) {
        console.log(error);
    })

//simifiled syntax
getUser()
    .then(
        function (fakeUser) {
            console.log('get User')
            return login(fakeUser)
        }
    )
    .then(
        function (status) {
            console.log('login  ')
            return showPage(status)
        }
    )
    .then(
        function (page) {
            console.log(' page ')
            console.log(page)
        }
    )
    .catch(function (err) {
        console.log(error);
    });

