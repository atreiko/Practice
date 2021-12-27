const loader            = document.querySelector('.loader')
const form              = document.querySelector('#form')
const email             = document.querySelector('#email')
const username          = document.querySelector('#username')
const password          = document.querySelector('#password')
const confirmPassword   = document.querySelector('#confirmPassword')
const tac               = document.querySelector('#terms-and-cond')
const submitBtn         = document.querySelector('.submit-btn')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    submitBtn.addEventListener('click', () => {
        // if(!email.value.length) {
        //     showAlert('enter your email')
        // } else if(!username.value.length) {
        //     showAlert('enter your username')
        // } else if(password.value < 6) {
        //     showAlert('password should be 6 letters long')
        // } else if(confirmPassword.value !== password.value) {
        //     showAlert('password mismatch. try again') 
        // } else if(!tac.checked) {
        //     showAlert('you must agree to our terms and conditions')
        // } else {
            //!: submit form
            loader.style.display = 'block';
            sendData('/signup', {
                email           : email.value,
                username        : username.value,
                password        : password.value,
                confirmPassword : confirmPassword.value,
                tac             : tac.checked
            })
        }
    )
})

//? send data
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
        .then(response => {
            processData(response)
            console.log(response); 
        })
}

const processData = (data) => {
    loader.style.display = null
    if(data.alert) {
        showAlert(data.alert)
    }
}

//? --- alert
const showAlert = (msg) => {
    const alert = document.querySelector('.alert')
    const alertMessage = document.querySelector('.alert p')
    alertMessage.innerHTML = msg
    alert.classList.add('show')
    setTimeout(() => {
        alert.classList.remove('show')  
    }, 3000)
}

