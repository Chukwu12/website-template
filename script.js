
    let swiperProducts = new Swiper(".products-container", {
      spaceBetween: 32,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true;
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
