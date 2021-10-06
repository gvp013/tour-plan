var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
<<<<<<< HEAD

  effect: 'coverflow',
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
=======
>>>>>>> 6a446f6099c347ad8f18be3c67f5644aac4f764d
});

ymaps.ready(init);

function init() {
 var myMap = new ymaps.Map("map", {
    center: [7.837196, 98.298813],
    zoom: 15
        });
    }