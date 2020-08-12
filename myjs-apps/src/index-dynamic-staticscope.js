//'use strict'
//lexcial scope and this keyword:

//this and function binding : owner of function.
//when owner is decided , during runtime. 
//owner is decied by calll,apply,bind and direct call.

//window.name = 'my frined'

const training = {
    name: 'Subramanian',
    teach: function () {
        console.log('teach function', this.name);
        var self = this;
        //inner function
        // return function () {
        //     console.log('learn function')
        //     console.log(this.name, 'is teaching');
        //     // console.log(self.name, 'is teaching');
        //     // console.log(training.name,'is teaching');
        // }
        // learn.call(training);
        return () => {
            console.log('learn function')
            console.log(this.name, 'is teaching');
        }

    }
};
//teach is method of training object, name is property of training object
let learn = training.teach()
learn();
//learn.call(training);


