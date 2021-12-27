

let isScrolling = false

window.addEventListener('scroll', throttleScroll, false)

function throttleScroll(e) {
    if(isScrolling === false) {
        window.requestAnimationFrame(function() {
            scrolling(e)
            isScrolling = false
        })
    }
    isScrolling = true
}

document.addEventListener('DOMContentLoaded', scrolling, false)

const aboutText = document.querySelectorAll('.text p')
const typesSection = document.querySelector('.types')
const typeCards = document.querySelectorAll('.card')

function scrolling(e) {

    aboutText.forEach(el => {
        if(isPartiallyVisible(el)) {
            el.classList.add('active')
        } else {
            el.classList.remove('active')
        }
    })

    typeCards.forEach((el, index) => {
        if(isPartiallyVisible(el)) {
            typesSection.classList.add('active')
            setTimeout(() => {
                el.classList.add('active')
            }, Number(`${index}00`));
        } else {
            el.classList.remove('active')
            typesSection.classList.remove('active')
        }
    })

}

function isPartiallyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();
  
    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;
  
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
  
function isFullyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();
  
    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
  
    return ((top >= 0) && (bottom <= window.innerHeight));
}
