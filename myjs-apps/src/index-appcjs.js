const UserService = require('./services/UserService');


//function
async function startApp() {
    let service = new UserService();
    console.log('loading')
    try {
        let users = await service.findAll();
        console.log(users);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('done!!!')
    }

}
startApp();