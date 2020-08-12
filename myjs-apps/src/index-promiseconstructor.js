//promise constructors


function delay(data = "", timer = 1000) {
    return new Promise(function (resolve, reject) {
        //async callback logic
        setTimeout(resolve, timer, data)
    });
}

function processRequest(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

delay("Hello World")
    .then(
        function (response) {
            console.log(response)
        }
    );

processRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then(function (posts) {
        console.log(posts);
    })
    .catch(function (err) {
        console.error('Augh, there was an error!', err.statusText);
    });
