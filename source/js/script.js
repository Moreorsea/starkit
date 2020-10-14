'use strict';

// $('#pagepiling').slick({
//     vertical: true,
//     arrows: false,
//     dots: true,
//     swipe: true,
//     swipeToSlide: true,
//     slidesToScroll: 1,
//     touchMove: true,
//     verticalSwiping: true
// });

// $('.screen-slider').slick({
//     arrows: true,
//     dots: false,
//     swipe: true,
//     infinite: false,
//     slidesToScroll: 1
// });

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
