//?     ------------     fetch post
const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            return response.json()
                .then(error => {
                    const err = new Error('something is going wrong')
                    err.data = error
                    throw err
                })
        })
}

const body = {
    name: 'bolocode',
    age: 29
}

//* POST:
sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))




