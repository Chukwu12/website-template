
    let swiperProducts = new Swiper(".products-container", {
      spaceBetween: 32,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
        breakpoints: {
        1024: {
     
          spaceBetween: 72,
        },
      },
    });


// Change background color for header //
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
