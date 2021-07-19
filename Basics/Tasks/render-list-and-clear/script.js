
const arr = [
    'Artem', 'Daria', 'Alexander', 'Victoria', 'Julia', [
        'Developer', 'Architecture', 'Manicurist', 'Builder', 'Dentist', ['Kiev, Lviv', 'Kharkiv']
    ]
]

function renderList(array) {
    // const body = document.querySelector('body')
    const ul = document.createElement('ul')
    const content = createContent(array)
    ul.innerHTML = content
    document.body.append(ul)
    timer(10)

    function createContent(array) {
        return array.map(el => {
            if (typeof el !== 'object' && el !== null) return `<li>${el}</li>`
            else return `<li><ul>${createContent(el)}</ul></li>`
        }).join('')
    }

    function timer(seconds) {
        let secondsSpan = document.querySelector('.seconds')

        if (seconds > 0) {
            secondsSpan.textContent = seconds
            seconds -= 1

            setTimeout(() => {
                timer(seconds)
            }, 1000)
        } else {
            document.body.hidden = true
        }
    }
}

renderList(arr)