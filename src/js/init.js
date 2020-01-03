// Inner slider
$('.slick-carousel').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

// Features slider
$('.features-slider').slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// Team slider
$('.team-slider').slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// Moblie menu
$('#menu').slicknav({
    appendTo: 'header .container-fluid .header-content',
    label: '',
    afterOpen: function () {
        document.body.style.overflow = 'hidden';
        let openmenu = document.getElementsByClassName('slicknav_nav');
        openmenu[0].addEventListener('click', function (e) {
            let target = e.target;
            if (target.matches('.slicknav_nav a')) {
                $('#menu').slicknav('close');
            }
        })
    },
    afterClose: function () {
        document.body.style.overflow = 'auto';
    }
});

// Portfolio tabs
$( "#tabs" ).tabs();