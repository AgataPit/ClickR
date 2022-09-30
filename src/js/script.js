window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__items'),
    menuItem = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.hamburger');
    page = document.querySelector('body');

    hamburger.addEventListener('click', () => {
      console.log(page);
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__items_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
          console.log(page);
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu__items_active');
        })
    })
});

$(document).ready(function(){
    $('.carousel__inner').slick({
        // centerMode: true,
        // variableWidth: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/Arrow Left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/Arrow Right.svg"></button>',
        responsive: [ 
            {
                breakpoint: 992,
                settings: {
                    // dots: true,
                    // arrows: false
                    slidesToShow: 1,
                  slidesToScroll: 1,
                  // centerMode: true,
                  // variableWidth: true
                }
              },

              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true
                }
              },



        ]
      });
  });

  $(document).ready(function(){
    $('.testimonial__carousel').slick({
        infinite: true,
        // centerMode: true,
        // centerPadding: '30px',
        // variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/testimonial/Arrow Left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/testimonial/Arrow Right.svg"></button>',
        responsive: [ 
            {
                breakpoint: 992,
                settings: {
                    // dots: true,
                    // arrows: false
                    // centerMode: true,
        // centerPadding: '150px',
                }
              },

              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },



        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.ruscar__wrapper').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/testimonial/Arrow Left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/testimonial/Arrow Right.svg"></button>',

        responsive: [ 
          {
              breakpoint: 993,
              settings: {
                centerMode: true,
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
          },
       ]
      });
  });