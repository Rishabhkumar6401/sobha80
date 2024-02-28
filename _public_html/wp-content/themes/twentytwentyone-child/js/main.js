$(document).ready(function() {
    $(".mobilemenu").click(function() {
        $("body").toggleClass("menuactive");
    });
    $(".siteMenu ul li a").click(function() {
        $("body").removeClass("menuactive");
    });
});


$(function() {
    "use strict";
    $('[data-toggle="tooltip"]').tooltip();

});

$(document).ready(function() {
    "use strict";
    $(".scrollDown").click(function() {
        $('html,body').animate({
                scrollTop: $(".scrollto").offset().top
            },
            'slow');
    });

    /*****go to specific div******/

    $(function() {
        $(".fpBtn").click(function() {
            $(".fpBtn.active").removeClass('active');
            $(this).addClass('active');
            $('.fpContainer').hide();
            $("#fpContainer" + $(this).data('target')).fadeIn(400);
        });


        $('.closeForm').click(function() {
            $('.fixed-form').fadeOut(500);
            $('.enquiry-btn').fadeIn(500);
        });

        $('.enquiry-btn').click(function() {
            $('.fixed-form').fadeIn(500);
            $('.enquiry-btn').fadeOut(500);
        });

        if (location.hash) {
            var hash = location.hash;
            window.scroll(0, 0);
            $("a[href=" + hash + "]").click();
        }

    }); /**/

    /*****go to specific div******/

    $(".menuBtn").click(function() {
        $(this).toggleClass('closeMenuBtn');
        $('.mbMenuContainer').stop().fadeToggle().toggleClass('active');
        $('.header').toggleClass('notfixed');
        $('body').toggleClass('overflow-hidden');
    });



    $(".hasChild").click(function() {
        $(this).toggleClass('hasChild1');
        $(".dropdown").slideUp(500);
        if ($(this).find(".dropdown").is(':hidden') === true) {
            $(this).find(".dropdown").slideDown('normal');
        }
    });


    $(".scroll-up").click(function() {
        var hit = $(this).data('hit');
        var target = $('[data-target=' + hit + ']');
        $("html,body").animate({
            scrollTop: target.offset().top
        }, 500);
    });

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.button-top').animate({
                opacity: 1,
                right: 10
            }, 0);
        } else {
            $('.button-top').animate({
                opacity: 0,
                right: -40
            }, 0);
        }
    });

    $(".button-top").click(function() {
        $("html,body").animate({
            scrollTop: '0px'
        }, 500);
    });


    $('[data-magnify]').magnify({
        headToolbar: [
            'close'
        ],
        initMaximized: true
    });
});



$(window).scroll(function() {
    "use strict";
    var wScroll = $(this).scrollTop();
    if (wScroll > 100) {
        $(".header, .fixed-form").addClass("fixed");
    } else {
        $(".header, .fixed-form").removeClass("fixed");
    }
});



$(document).ready(function(e) {
    $(".enquirybtn").click(function() {
        $(".enquirybtn").slideUp("");
        $(".fixed-form").slideDown("");
    });
    setTimeout(function() {
        $('#enquiry').modal('show');
    }, 10000);

    var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 1,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 1,
        },
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                loop: true,
            },
            512: {
                slidesPerView: 1,
                loop: true,
            },
            620: {
                slidesPerView: 2,
                loop: true,
            },
            1200: {
                slidesPerView: 3,
                loop: true,
            },
        },
    });
});

jQuery('.gallerySlider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.ameni__inner').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        481: {
            items: 2
        },
        767: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})


jQuery(document).ready(function() {
    jQuery(".accordion").on("click", ".heading", function() {
        jQuery(this).toggleClass("active").next().slideToggle();
        jQuery(".contents").not(jQuery(this).next()).slideUp(300);
        jQuery(this).parents('.accordion').siblings().find('.heading').removeClass("active");
    });

});

$(window).scroll(function() {
    "use strict";
    var wScroll = $(this).scrollTop();
    if (wScroll > 100) {
        $(".siteHeader").addClass("fixed");
    } else {
        $(".siteHeader").removeClass("fixed");
    }
});