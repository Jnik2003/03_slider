const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = document.querySelectorAll('.main-slide>div')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount.length - 1) * 100}vh`

upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})

function changeSlide(direction){
	if(direction === 'up'){
		activeSlideIndex++
		console.log(activeSlideIndex)
		if(activeSlideIndex === slidesCount.length){
			activeSlideIndex = 0
		}
	}
	else if(direction === 'down'){
		activeSlideIndex-- 
		if(activeSlideIndex < 0){
			activeSlideIndex = slidesCount.length - 1
		}
	}

	const height = container.clientHeight

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}