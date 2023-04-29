
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
        breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
