
//? objects
const loader = document.querySelector('.loader')
const submitBtn = document.querySelector('.submit-btn')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const number = document.querySelector('#number')
const tac = document.querySelector('#terms-and-cond')
const notification = document.querySelector('#notification')

//? listener
submitBtn.addEventListener('click', () => {
        //? submit form
        loader.style.display = 'block';
        sendData('/signup', {
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller: false
        })
    // }
})

//? send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then(response => {
        console.log(response)
        processData(response)
    })
}

const processData = (data) => {
    loader.style.display = null
    if(data.alert) {
        showAlert(data.alert)
    } else if(data.name) {
        //? create authToken
        data.authToken = generateToken(data.email)
        sessionStorage.user = JSON.stringify(data)
        location.replace('/')
    }
}

//? alert function
const showAlert = msg => {
    let alertBox = document.querySelector('.alert-box')
    let alertMsg = document.querySelector('.alert-msg')
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 2000)
}