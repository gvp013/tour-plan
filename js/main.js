const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

ymaps.ready(init);

function init() {
 var myMap = new ymaps.Map("map", {
    center: [7.837196, 98.298813],
    zoom: 15
        });
    }