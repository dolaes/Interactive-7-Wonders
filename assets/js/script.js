const allGalaries = document.querySelectorAll('.mySwiper');
for (let i= 0 ; i <allGalaries.length ; i++){
    var swiper = new Swiper(allGalaries[i], {
        slidesPerView: 3.5,
        spaceBetween: 10,
        mousewheel: true,
        
        centeredSlides: true,
        keyboard: {
          enabled: true,
        },
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
             992: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
           1200: {
              slidesPerView: 5.5,
              spaceBetween: 20,
            },
        },
      });

}

