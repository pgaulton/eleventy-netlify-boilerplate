(function($) {

      var swiperSlider = function() {
        console.log('swiper loaded')

          $('.swiper-container').each(function() {

              var interleaveOffset = 0.5;

              var id = $(this).attr('id');
              var perpage = $(this).data('perpage') || 1;
              var loop = $(this).data('loop') || true;
              var speed = $(this).data('speed') || 700;
              var autoplay = $(this).data('autoplay') || 5000;
              var slidegroup = $(this).data('slidegroup') || 1;
              var space = $(this).data('space') || 0;
              var effect = $(this).data('effect');
              var direction = $(this).data('direction') || 'horizontal';
              var breakpoints = $(this).data('breakpoints');

              var swiper = new Swiper('#' + id, {
                  slidesPerView: perpage,
                  spaceBetween: space,
                  slidesPerGroup: slidegroup,
                  loop: loop,
                  speed: speed,
                  effect: effect,
                  direction: direction,
                  breakpoints: breakpoints,
                  autoplay: {
                      delay: autoplay,
                      disableOnInteraction: false,
                  },
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },

              });
          })
      }

      $(document).ready(swiperSlider);

})(jQuery);