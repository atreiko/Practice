const container = document.getElementById('container')
const img = document.querySelector('img')

container.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    img.style.trasformOrigin = `${x}px ${y}px`
    img.style.transform = 'scale(2)'
})

container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = 'center center'
    img.style.transform = 'scale(1)'
})





// transformOrigin - устанавливает исходную точку для переобразования элемента. Будто картинку прикрепили скрепкой