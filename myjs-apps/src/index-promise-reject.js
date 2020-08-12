/**
 * Promise with errors
 */

function getErrors() {
    return Promise.reject('Something went wrong!!!')
}
getErrors().catch(function (err) {
    console.log(err);
});
