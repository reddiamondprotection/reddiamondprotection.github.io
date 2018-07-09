/* Zarra Theme Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
            headerHeight = $('.header_section').height(),
			triggerPoint = 10;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("fixed-top");
			} else {
				header.removeClass("fixed-top");
			}

		});
        $('.header_height').css( 'margin-top', headerHeight );
	})
/*=========================================================================
        Testimonial Carousel
=========================================================================*/
    $('#testimonial_carousel').imagesLoaded( function() {
    	var testiSelector = $('#testimonial_carousel');
    	testiSelector.owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 500,
            items: 1,
            nav: false
        });
    });

/*=========================================================================
        Sponsor Carousel
=========================================================================*/
    $('#sponsor_carousel').imagesLoaded( function() {
    	$('#sponsor_carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            smartSpeed: 1000,
            nav: false,
            dots: false,
            responsive: true,
            responsive : {
			    0 : {
			        items: 3
			    },
			    480 : {
			        items: 3,
			    },
			    768 : {
			        items: 5,
			    }
			}
        });
    });

/*=========================================================================
	Isotope Active
=========================================================================*/
	$('.portfolio_items').imagesLoaded( function() {

		 // Add isotope click function
		$('.portfolio_filter li').on( 'click', function(){
	        $(".portfolio_filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".portfolio_items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".portfolio_items").isotope({
	        itemSelector: '.single_item',
	        layoutMode: 'fitRows',
	    });
	});             
             
/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

/*=========================================================================
	Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	}); 
				 
/*=========================================================================
  Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init({
       offset: 0,
       mobile: false,
   });             

})(jQuery);
