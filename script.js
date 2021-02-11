const menuButton = document.querySelector('.menuButton')
const menu = document.querySelector('.menu')

menuButton.addEventListener('click', (e) => {
    document.body.classList.toggle('menu-open')
    const menuIsOpen = document.body.classList.contains('menu-open')

    setTimeout(() => {
        menu.style.display = menuIsOpen ? 'grid' : 'none'
    }, menuIsOpen ? 400 : 0)
})
const listImage = [...document.querySelectorAll('.listImage > div')]
const listProjects = [...document.querySelector('.listMenu > ul').childNodes]

let active = document.querySelector('.listImage > .item.active')

listProjects.forEach(project => {
    project.addEventListener('mouseenter', (e) => {
        const index = parseInt(e.target.getAttribute('projectn'), 10) - 1
        active.classList.remove('active')
        listImage[index].classList.add('active')
        active = listImage[index]
    })
});


