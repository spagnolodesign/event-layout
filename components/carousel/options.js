// Swiper options 
// Please reference to the doc: https://swiperjs.com/api/#parameters

const options = {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  }
};


export default options;