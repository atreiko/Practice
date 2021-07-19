
const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

function toggleMenu() {
    menuToggle.classList.remove('active')
    navigation.classList.remove('active')
}

// ==================
const text = document.querySelector('.content p')
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>')
// console.log(text);

const letters = document.querySelectorAll('.about .content p span')
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('mouseover', function() {
        letters[i].classList.add('active')
    })
}
console.log(letters);