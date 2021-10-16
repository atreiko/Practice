
const navbar = document.querySelector('nav')

//? create component
const createNavbar = () => {

    navbar.innerHTML = `
        <a class="logo">skeleton</a>
        <input type="search" placeholder="search...">
        <ul class="links">
            <li><a href="/">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="/blog">blog</a></li>
            <li><a href="#">projects</a></li>
            <li><a class="login"><img src="img/1.png" alt="logo"></a></li>
        </ul>
        <div class="burger">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
        </div>
    `;

}

createNavbar()

//? navbar slide
const navSlide = () => {
    const burger        = document.querySelector('.burger')
    const nav           = document.querySelector('.links')
    const navLinks      = document.querySelectorAll('.links li')

    
    burger.addEventListener('click', () => {
        //? toggle nav
        nav.classList.toggle('nav-active')

        //? animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        })

        //? burger animation
        burger.classList.toggle('toggle')
    })


}

navSlide()