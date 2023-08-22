const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  allowTouchMove: false, //防止觸控滑動
  centeredSlides: true,
  speed: 10000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
