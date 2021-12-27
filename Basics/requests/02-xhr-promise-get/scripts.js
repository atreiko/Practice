//?     ------------     xgr promise get
const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)

        xhr.responseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response); // error 1 method
            } else {
                resolve(xhr.response); // ok
            }
            
        }

        xhr.onerror = () => {
            reject(xhr.response);       // error 2 method
        }

        xhr.send()
    })
}

//* GET:
sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))


