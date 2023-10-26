const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
    },
       speed: 400,
     spaceBetween: 100,
       centeredSlides: true,
     spaceBetween: 100,
   effect: 'coverflow',
     coverflowEffect: {
       rotate: 30,
       slideShadows: false,
     },
       navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
});

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "./img/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "./img/close_white_36dp.svg";
  }
}
