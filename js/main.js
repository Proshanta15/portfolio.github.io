$('document').ready(function() {
    $('.project-area .carousel .owl-carousel').owlCarousel({
        loop: !0,
        autoplay: !0,
        dots: !0,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    })
});
$('.skill-per').each(function() {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({
        animatedValue: 0
    }).animate({
        animatedValue: per
    }, {
        duration: 1500,
        step: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%')
        },
        complete: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%')
        }
    })
});
$(document).ready(function() {
    $('#bar1').barfiller({
        barColor: 'red',
        duration: '3000'
    });
    $('#bar2').barfiller({
        barColor: 'green',
        duration: '3000'
    });
    $('#bar3').barfiller({
        barColor: 'blue',
        duration: '3000'
    });
    $('#bar4').barfiller({
        barColor: 'orange',
        duration: '3000'
    });
    $('#bar5').barfiller({
        barColor: 'red',
        duration: '3000'
    });
    $('#bar6').barfiller({
        barColor: 'green',
        duration: '3000'
    })
});
$('document').ready(function() {
    var mixer = mixitup('.img-mixer')
});
$('.service-area .img-mixer .img-gallery .test-popup-link').magnificPopup({
    type: 'image',
    gallery: {
        enabled: !0
    }
});
$('document').ready(function() {
    $(".js--about-section").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky")
        } else {
            $("nav").removeClass("sticky")
        }
    })
});
$('document').ready(function() {
    $(document).on('click', '.header_area .main-menu ul li', function() {
        $(this).addClass('active').siblings().removeClass('active')
    })
});
$('.header_area .main-menu .navbar a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000)
    }
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 30) {
            $('#topBtn').fadeIn()
        } else {
            $('#topBtn').fadeOut()
        }
    });
    $("#topBtn").click(function() {
        $('html ,body').animate({
            scrollTop: 0
        }, 800)
    })
});
$('document').ready(function() {
    AOS.init()
})
