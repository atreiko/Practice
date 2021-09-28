
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
