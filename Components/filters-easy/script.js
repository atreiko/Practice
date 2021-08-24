
const list = document.querySelector('.list')
const items = document.querySelectorAll('.blocks__item')
const listItems = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        listItems.forEach(item => item.classList.remove('active'))
        target.classList.add('active')
        
        switch (targetId) {
            case 'all':
                getItems('blocks__item')
            break;
            case 'purple':
                getItems(targetId)
            break;
            case 'green':
                getItems(targetId)
            break;
            case 'yellow':
                getItems(targetId)
                break;
            case 'red':
                getItems(targetId)
                break;
            default:
                break;
        }
    })
    
}


filter()

function getItems(className) {
    items.forEach(item => {
        if(item.classList.contains(className)) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
}