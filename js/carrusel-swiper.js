
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 8,
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    mousewheel: true,
    keyboard: true,
  });