//?     ------------     XHR
const requestURL = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest()
xhr.open('GET', requestURL)

//* parse to JSON:
xhr.responseType = 'json'

xhr.onload = () => {
    if (xhr.status >= 400) {
        console.log(xhr.response);
    } else {
        console.log(xhr.response);
    }
    
}

xhr.onerror = () => {
    console.log(xhr.response);
}

xhr.send()


