import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';
import './node_modules/jquery/dist/jquery.min.js';
import Swiper from 'swiper/bundle';
import AOS from 'aos';



//swiper
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


//AOS
AOS.init();