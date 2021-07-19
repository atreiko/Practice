
function changeColor(getColor) {
    let bg = document.querySelector('.bg')
    let selectColor = getColor.value;
    let text = getColor.options[getColor.selectedIndex].text;
    console.log(getColor.options);
    bg.style.background = selectColor;
    bg.innerHTML = text;
}
