
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