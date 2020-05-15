$(window).on('load', function () {
    // $('.pre-loader').removeClass('pre-in');
    $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
        $(this).remove();
    });
});
$(document).ready(function () {
    if ($(window).width() > 767) {
        $('select').selectpicker({
            dropupAuto: false
        });
    }
    /////////fixed-header/////////
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $("header").addClass("header-scroll");
        } else {
            $("header").removeClass("header-scroll");
        }
    });
    if ($(this).scrollTop() >= 40) {
        $("header").addClass("header-scroll");
    } else {
        $("header").removeClass("header-scroll");
    }



    /////////Brands Slider/////////
    $('.brand-slider').owlCarousel({
        items: 6,
        margin: 0,
        // stagePadding: 1,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<i class='fas fa-caret-right'></i>", "<i class='fas fa-caret-left'></i>"],
        dots: true,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });
    /////////Product-slider/////////
    $('.Product-slider').owlCarousel({
        items: 4,
        margin: 0,
        // stagePadding: 1,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<i class='fas fa-caret-right'></i>", "<i class='fas fa-caret-left'></i>"],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    /////////testimonial-slider/////////
    $('.testimonial-slider').owlCarousel({
        items: 2,
        margin: 28,
        // stagePadding: 1,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<i class='fas fa-caret-right'></i>", "<i class='fas fa-caret-left'></i>"],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            },
        }
    });

    //////mobile/////
    if ($(window).width() <= 767) {
        $(".cats-cont .col-md-4").unwrap();
        $(".cats-cont .cat").unwrap();
        $(".cats-cont .cats").addClass("owl-carousel");
        $('.cats').owlCarousel({
            items: 1,
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            rewind: true,
            autoplay: false,
            nav: false,
            dots: true,
        });
        //////
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".mo-navbar").addClass("nav-in");
            $('.lang').addClass("lang-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $('.lang').removeClass("lang-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $('.lang').removeClass("lang-in");
            $("body").removeClass("overflow");
        });
        $('.drop-down-li .nav-anchor').click(function () {
            $(".drop-down-li .drop-menu").slideToggle(300);
            $(".drop-down-li .nav-anchor").toggleClass(".sub-active");
        });

        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");

        $(".search-select").removeClass("selectpicker");
        $(".search-select").addClass("mobile-select");
        $(".search-select").wrap('<div class="mobile-select-cont"></div>');
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })

});


