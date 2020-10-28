'use strict';

$('.screen-slider').owlCarousel({
    loop:false,
    nav:true,
    items: 1,
    dots: false,
	margin: 5
})

const $slider = $("#pagepiling");
let currentVacancies = document.querySelector('.current-vacancies')
$slider
	.on('init', () => {
		mouseWheel($slider)
	})
	.slick({
        dots: true,
        arrows: false,
		vertical: true,
		infinite: false,
		speed: 1000,
		draggable: true
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
let vacancyDetail = document.querySelectorAll('.vacancy-detail')
let currentWrapper = document.querySelector('.current-wrapper')
let blockDisabled = document.querySelector('.vacancy-block-disabled')
for(let i = 0; i < showDetailVacancy.length; i++) {
	showDetailVacancy[i].addEventListener('click', () => {
		currentWrapper.classList.add('inactive')
		vacancyDetail[i].classList.add('show')
		blockDisabled.classList.add('active')
		// currentVacancies.style.opacity = '0'
	})
}

let detailVacancyClose = document.querySelectorAll('.vacancy-detail__close')
if(detailVacancyClose) {
	detailVacancyClose.forEach((close) => {
		close.addEventListener('click', () => {
			currentWrapper.classList.remove('inactive')
			vacancyDetail.forEach((detail) => {
				detail.classList.remove('show')
			})
			blockDisabled.classList.remove('active')
		})
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

let photoButton = document.querySelector('.button-wrapper__photo')
let galleryPopup = document.querySelector('.gallery-popup')
let header = document.querySelector('.main-header__wrapper')
let popupClose = document.querySelector('.gallery-popup__close')

if(photoButton) {
	photoButton.addEventListener('click', () => {
		galleryPopup.style.display = 'block'
		header.style.opacity = '0.2'
		slickDots.style.opacity = '0.2'
	})
}

if(popupClose) {
	popupClose.addEventListener('click', () => {
		galleryPopup.style.display = 'none'
		header.style.opacity = '1'
		slickDots.style.opacity = '1'
	})
}

$('.gallery').owlCarousel({
    loop:false,
    nav:true,
    items: 1,
    dots: false,
    smartSpeed: 1500
})

//клик по кнопке "посмотреть офис"
let vacancyOffice = document.querySelector('.vacancy-office')
let officePopup = document.querySelector('.office-popup')
let officeClose = document.querySelector('.office-popup__close')

if(vacancyOffice){
	vacancyOffice.addEventListener('click', () => {
		officePopup.style.display = 'block'
		header.style.opacity = '0.2'
		slickDots.style.opacity = '0.2'
	})
}

if(officeClose) {
	officeClose.addEventListener('click', () => {
		officePopup.style.display = 'none'
		header.style.opacity = '1'
		slickDots.style.opacity = '1'
	})
}

$('.office').owlCarousel({
    loop:false,
    nav:true,
    items: 1,
    dots: false,
    smartSpeed: 1500
})

//клик по кнопке "показать видео"
let buttonVideo = document.querySelector('.button-wrapper__video')
let popupVideo = document.querySelector('.popup-video')
let videoClose = document.querySelector('.popup-video__close')

if(buttonVideo) {
	buttonVideo.addEventListener('click', () => {
		popupVideo.classList.add('active')
		header.style.opacity = '0.2'
		slickDots.style.opacity = '0.2'
	})
}

if(videoClose) {
	videoClose.addEventListener('click', () => {
		popupVideo.classList.remove('active')
		header.style.opacity = '1'
		slickDots.style.opacity = '1'
	})
}