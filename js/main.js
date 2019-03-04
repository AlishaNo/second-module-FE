$(document).ready(function(){
    $('.news-slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.scroll-to').click(function (){ //от кого скролл, цель клика
        $('html, body').animate({
            scrollTop: $('.form-container').offset().top //к кому скроллит
        }, 2000);
    });
    $('.first').click(function (){ //от кого скролл, цель клика
        $('html, body').animate({
            scrollTop: $('.gallery').offset().top //к кому скроллит
        }, 2000);
    });
    $('.second').click(function (){ //от кого скролл, цель клика
        $('html, body').animate({
            scrollTop: $('.news').offset().top //к кому скроллит
        }, 2000);
    });
    $('.third').click(function (){ //от кого скролл, цель клика
        $('html, body').animate({
            scrollTop: $('.form-container').offset().top //к кому скроллит
        }, 2000);
    });
});