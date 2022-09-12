const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const slidesCount = document.querySelectorAll('.main-slide>div')

console.log(slidesCount.length)

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`