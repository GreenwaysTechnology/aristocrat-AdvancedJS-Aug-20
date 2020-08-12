const USERS = require('../data/UserData');


function UserService() {
    //methods :async api 
    this.findAll = function () {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, JSON.stringify(USERS));
        });
    }

}

module.exports = UserService;