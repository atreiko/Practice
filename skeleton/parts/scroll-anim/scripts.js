
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

const listItems = document.querySelectorAll('#list li');
const listTitles = document.querySelectorAll('.list__title');
const listText = document.querySelectorAll('.text');

function scrolling(e) {

    listTitles.forEach(el => {
        if(isPartiallyVisible(el)) {
            document.body.classList.add('color-2')
            el.classList.add('active')

        } else {
            document.body.classList.remove('color-2')
            document.body.classList.add('color-1')
            el.classList.remove('active')
        }
    })

    listText.forEach(el => {
        if(isPartiallyVisible(el)) {
            el.classList.add('active')
        } else {
            el.classList.remove('active')
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