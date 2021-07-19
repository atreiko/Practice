
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs')
    const tabsTitle = document.querySelectorAll('.tabs__title')
    const content = document.querySelectorAll('.content')

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__title')) {
                const tabsPath = e.target.dataset.tabsPath
                console.log(tabsPath);
                tabsHandler(tabsPath)
            }

            function tabsHandler(path) {
                tabsTitle.forEach(el => el.classList.remove('tabs__title-active'))
                document.querySelector(`[data-tabs-path='${path}']`).classList.add('tabs__title-active')

                content.forEach(el => el.classList.remove('content__active'))
                document.querySelector(`[data-tabs-target='${path}']`).classList.add('content__active')
            }
        })
    }
})