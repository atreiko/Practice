
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
;

const createFooter = () => {
    let footer = document.querySelector('footer')

    footer.innerHTML = `
        <div class="footer-content">
        <img src="./img/light-logo.webp" alt="footer-logo" class="logo">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="" class="footer-link">t-shirts</a></li>
                <li><a href="" class="footer-link">sweatshirts</a></li>
                <li><a href="" class="footer-link">shirts</a></li>
                <li><a href="" class="footer-link">jeans</a></li>
                <li><a href="" class="footer-link">trousers</a></li>
                <li><a href="" class="footer-link">shoes</a></li>
                <li><a href="" class="footer-link">casuals</a></li>
                <li><a href="" class="footer-link">formal</a></li>
                <li><a href="" class="footer-link">sports</a></li>
                <li><a href="" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="" class="footer-link">t-shirts</a></li>
                <li><a href="" class="footer-link">sweatshirts</a></li>
                <li><a href="" class="footer-link">shirts</a></li>
                <li><a href="" class="footer-link">jeans</a></li>
                <li><a href="" class="footer-link">trousers</a></li>
                <li><a href="" class="footer-link">shoes</a></li>
                <li><a href="" class="footer-link">casuals</a></li>
                <li><a href="" class="footer-link">formal</a></li>
                <li><a href="" class="footer-link">sports</a></li>
                <li><a href="" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, illum? Velit ut rerum qui tenetur maiores praesentium assumenda impedit! Repellendus ipsam aspernatur hic commodi voluptatibus velit. Iste sapiente molestias cumque!</p>
    <p class="info">telephone - 380 11 099 09, 380 11 099 01</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div class="social">
            <a href="#" class="social-link social-link__instagram"></a>
            <a href="#" class="social-link social-link__facebook"></a>
            <a href="#" class="social-link social-link__twitter"></a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter()

const productContainers = [...document.querySelectorAll('.product-container')]
const nextBtn = [...document.querySelectorAll('.next-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect() // Координаты контейнера, в котором карточки
    // console.log(containerDimenstions);
    let containerWidth = containerDimenstions.width

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
;
const productImages = document.querySelectorAll('.product-images img')
const productImageSlide = document.querySelector('.image-slider')


console.log(productImages);

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active')
        item.classList.add('active');
        console.log(item);
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

// toggle size btns

const sizeBtns = document.querySelectorAll('.size-radio-btn')
let checkedBtn = 0;

console.log(sizeBtns);

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check')
        item.classList.add('check')
        checkedBtn = i;
    })
})

