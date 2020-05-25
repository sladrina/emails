$(document).ready(function(){
    $('.slick-slider').slick({
        slidesToShow: 5,
        infinite: true,
        arrows: true,
        speed: 600,
        autoplay: true,
        cssEase: 'cubic-bezier(.8,-0.5,.4,1.2)',
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});
