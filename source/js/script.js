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
currentVacancyClose.addEventListener('click', () => {
	currentVacancies.classList.remove('show')
})