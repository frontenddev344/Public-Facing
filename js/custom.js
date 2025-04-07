$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
    });
    
    $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
  });

  var swiper = new Swiper('.awards-slider', {
    slidesPerView: 8, 
    spaceBetween: 20, 
    autoplay: {
      delay: 1500, 
      disableOnInteraction: false, // Keep autoplaying after interactions
    },
    loop: true, 
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 8,
      },
    },
  });
  