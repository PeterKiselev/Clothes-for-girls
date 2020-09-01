'use strict'

// dropdown
function toggleMenu(e) {
    e.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar--opened');
}

(function ($) {
    $(function () {

        $('input, select').styler();

    });
})(jQuery);

(function ($) {
    $(window).on("load", function () {
        $(".jq-selectbox__dropdown ul").mCustomScrollbar();
    });
})(jQuery);

$('.jq-selectbox__dropdown ul').mCustomScrollbar({
    axis: 'y',
    theme: 'dark-thick',
    setHeight: 190,
    setTop: 0,
    scrollButtons:{ scrollAmount: 50 }
});


$(document).ready(function () {
    $('.goods-grid--similar').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: '.prevArrow',
        nextArrow: '.nextArrow',
        responsive: [
            {
              breakpoint: 1170,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
});

