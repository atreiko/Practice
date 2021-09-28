
let nav = document.querySelector('.navbar')

export const createNav = () => {
        
    nav.innerHTML = `

        <div class="nav">
            <img src="./img/dark-logo.png" alt="logo" class="brand-logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search, brand, product">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#void"><img src="./img/user.png" alt="user"></a>
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
