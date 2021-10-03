$(function () {
    //fixed heder
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass('fixed');

        } else {
            header.removeClass('fixed');

        }

        checkScroll(scrollPos, introH);

    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass('fixed');

        } else {
            header.removeClass('fixed');

        }
    }
    //    smooth skroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elemenOffset = $(elementId).offset().top
        console.log(elemenOffset);

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elemenOffset - 80
        }, 800);
    });


    //    Nav Toggle
    //    let nav = $("#nav");
    //    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");

    });



    //Reviews: https://kenwheeler.github.io/slick/

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


});
