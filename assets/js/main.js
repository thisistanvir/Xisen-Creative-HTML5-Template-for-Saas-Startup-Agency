(function ($) {
    "use strict";
// Preloader
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#ctn-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
    loader();
// Preloader
    
// tooltip
    $('[data-toggle="tooltip"]').tooltip()

// data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

// Start Slick Nav
    $('#mobile-menu').slicknav({
        prependTo: '.show-mobile-menu',
        allowParentLinks: true
    });
// End Slick Nav

// Sticky Menu
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
        $(".header-area").removeClass("sticky");
    } else {
        $(".header-area").addClass("sticky");
    }
  });

// WOW active
  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,         
    mobile:       true,       
    live:         true,  
});
    wow.init();
//  End Wow 

//  AOS Animation
if ($("[data-aos]").length) {
	AOS.init({
		duration: 1000,
		mirror: true
	});
}

// Scroll Up
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300, 
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<i class="fa fa-arrow-up"></i>', 
        activeOverlay: false, 
    });
// Scroll Up

// Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        thumbs: false,
        autoplay: true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
    });

// Review Carousel
    $('.review-carousel').owlCarousel({
        items: 2,
        loop: true,
        dots: true,
        autoplay: true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 30,
        responsive: {
        0:{
            items:1
        },
        768:{
            items: 2
        }
    },
    });

// Brand Carousel
    $('.brand-carousel').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
        margin: 30,
        responsive: {
        0:{
            items:2
        },
        767:{
            items: 3
        },
        992:{
            items: 4
        },
        1200:{
            items: 5
        }
    },
    });

// Testimonial Carousel
    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        asNavFor: '.testimonial-nav'
    });
    $('.testimonial-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots: false,
        arrows: false,
		autoplay:true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0
    });

// Portfolio Slider Active 
    $('.portfolio-slider-active').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay:true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
                breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
    });

// Post Gallery Active
    $('.post-gallery-active').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay:true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
    });
    
// Product Image Slider
	$('.product-large-img').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		autoplay:true,
		slidesToShow: 1,
		slidesToScroll: 1,
    });

// Related Product Carousel
    $('.related-product-active').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay:true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

// Magnific Popup Video
$(".popup-video").magnificPopup({
    type: 'iframe',
});

// Magnific Popup Image
$('.popup-img').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

// Isotope
    $('.grid').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
        }
        });
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        
        //for menu active class
        $('.portfolio-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    });

// Isotope Blog
    $('.blog-masonry').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.blog-masonry').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
        }
        });
    });



// Contact Map
    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(23.810331, 90.412521), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.business", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.park", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.school", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station.bus", "elementType": "all", "stylers": [{ "visibility": "on" }, { "saturation": "21" }, { "weight": "4.05" }] }]
        };
        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(23.810331, 90.412521),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }
// Contact Map

/*-------------------------
		showlogin toggle function
	--------------------------*/
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	/*-------------------------
		showcoupon toggle function
	--------------------------*/
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
    });
    /*-------------------------
		Create an account toggle function
	--------------------------*/
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});
	/*-------------------------
		Create an account toggle function
	--------------------------*/
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

})(jQuery);
