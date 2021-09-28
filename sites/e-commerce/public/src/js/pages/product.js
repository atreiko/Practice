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