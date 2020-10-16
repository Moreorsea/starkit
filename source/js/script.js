'use strict';

$('.screen-slider').owlCarousel({
    loop:false,
    nav:true,
    items: 1,
    dots: false,
    margin: 5
})

const $slider = $("#pagepiling");
$slider
	.on('init', () => {
		mouseWheel($slider)
	})
	.slick({
        dots: true,
        arrows: false,
		vertical: true,
		infinite: false,
	})
function mouseWheel($slider) {
	$(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
}
function mouseWheelHandler(event) {
	event.preventDefault()
	const $slider = event.data.$slider
	const delta = event.originalEvent.deltaY
	if(delta < 0) {
		$slider.slick('slickPrev')
	}
	else {
		$slider.slick('slickNext')
	}
}

//обработка клика по кнопке "смотреть вакансии"
let showVacancy = document.querySelectorAll('.vacancy-link')
let currentVacancies = document.querySelector('.current-vacancies')

for(let i = 0; i < showVacancy.length; i++) {
	showVacancy[i].addEventListener('click', () => {
		currentVacancies.classList.add('show')
	})
}

let currentVacancyClose = document.querySelector('.current-wrapper__close')
if(currentVacancyClose) {
	currentVacancyClose.addEventListener('click', () => {
		currentVacancies.classList.remove('show')
	})
}

let showDetailVacancy = document.querySelectorAll('.vacancy-list__item')
let vacancyDetail = document.querySelector('.vacancy-detail')
let currentWrapper = document.querySelector('.current-wrapper')
let blockDisabled = document.querySelector('.vacancy-block-disabled')
for(let i = 0; i < showDetailVacancy.length; i++) {
	showDetailVacancy[i].addEventListener('click', () => {
		currentWrapper.classList.add('inactive')
		vacancyDetail.classList.add('show')
		blockDisabled.classList.add('active')
	})
}

let detailVacancyClose = document.querySelector('.vacancy-detail__close')
if(detailVacancyClose) {
	detailVacancyClose.addEventListener('click', () => {
		currentWrapper.classList.remove('inactive')
		vacancyDetail.classList.remove('show')
		blockDisabled.classList.remove('active')
	})
}

let sendResumeButton = document.querySelector('.vacancy-link--yellow')
let slickDots = document.querySelector('.slick-dots')
let lines = slickDots.querySelectorAll('li')
let slickSlide = document.querySelectorAll('.slick-slide')
let sendForm = document.querySelector('.sixth-screen-vacancy')
let coords = Math.floor(sendForm.getBoundingClientRect().top)
let slickTrack = document.querySelector('.slick-track')
if(sendResumeButton) {
	sendResumeButton.addEventListener('click', () => {
		currentVacancies.classList.remove('show')

		slickTrack.style.transform = `translate3d(0px, -${coords}px, 0px)`
		for(let i = 0; i < lines.length; i++) {
			lines[i].classList.remove('slick-active')
			if(i == 5) {
				lines[i].classList.add('slick-active')
			}
		}

	})
}

//уведомление о том, что файл прикреплен
let fileInput = document.querySelector('.input-wrapper__input--file')
let inputFileText = document.querySelector('.input-file__text')

if(fileInput) {
	fileInput.addEventListener('change', () => {
		inputFileText.innerHTML = 'Прикреплен 1 файл'
	})
}
