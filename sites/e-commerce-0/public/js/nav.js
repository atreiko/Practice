
let nav = document.querySelector('.navbar')

const createNav = () => {

    nav.innerHTML = `

        <div class="nav">
            <img src="./img/dark-logo.png" alt="logo" class="brand-logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search, brand, product">
                    <button class="search-btn">Search</button>
                </div>
                <a>
                    <img src="./img/user.png" id="user-img" alt="user-img">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Log in as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="#void"><img src="./img/cart.png" alt="cart"></a>
            </div>
        </div>
        <ul class="links">
            <li class="links-item"><a href="#void" class="link">home</a></li>
            <li class="links-item"><a href="#void" class="link">women</a></li>
            <li class="links-item"><a href="#void" class="link">men</a></li>
            <li class="links-item"><a href="#void" class="link">kids</a></li>
            <li class="links-item"><a href="#void" class="link">accessories</a></li>
        </ul>

    `;
}

createNav()

//? nav popup
const userImageButton = document.querySelector('#user-img')
const userPopup = document.querySelector('.login-logout-popup') //! без точки
const popupText = document.querySelector('.account-info')
const actionBtn = document.querySelector('#user-btn')

userImageButton.addEventListener('click' , () => {
    userPopup.classList.toggle('hide')
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null)
    if(user != null) {
        //? user is logged in
        popupText.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear()
            location.reload()
        })
    } else {
        //? user is logged out
        popupText.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}