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