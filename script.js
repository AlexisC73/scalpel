const nav = document.querySelector('nav')
const menu = document.querySelector('.menuButton')
const menuItem = document.querySelector('.menuItem')

menu.addEventListener('click', () => {
    document.body.classList.toggle('menu-open')
    const menuOpen = document.body.classList.contains('menu-open')
    setTimeout(() => {
        menuItem.style.display = menuOpen ? 'grid' : 'none'
    }, menuOpen ? 400 : 0)
})

let activeImage = document.querySelector('.listImage > .item.active')


const listImage = document.querySelectorAll('.listImage > .item')
const listProjects = document.querySelectorAll('.listMenu > ul > li')

listProjects.forEach((project, index) => {
    project.addEventListener('mouseenter', (e) => {
        activeImage.classList.remove('active')
        listImage[index].classList.add('active')
        activeImage = listImage[index]
    })
})
