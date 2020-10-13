'use strict';

$('#pagepiling').slick({
    vertical: true,
    arrows: false,
    dots: true,
    swipe: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    touchMove: true,
    verticalSwiping: true
});

$('.screen-slider').slick({
    arrows: true,
    dots: false,
    swipe: true,
    infinite: false,
    slidesToScroll: 1
});

// $('.screen-slider').owlCarousel({
//     loop:true,
//     nav:true
// })
