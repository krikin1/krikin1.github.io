$(function(){

    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1006,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

              }
            },
        ]
    });


    $('.btn_menu').on('click', function(){
        $('.menu__list').slideToggle();
    })
});