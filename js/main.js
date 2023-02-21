(function ($) {
 "use strict";
    
    /*----------------------------
     sticky active
    ------------------------------ */
    
    var header = $('.stick-h2');
    var win = $(window);
    
    win.on('scroll',function() {    
        var scroll = win.scrollTop();
        if (scroll < 80) {
            header.removeClass('stick');
        }else{
            header.addClass('stick');
        }
    }); 

    /*----------------------------
     main-menu
    ------------------------------ */
    $('.main-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    }); 
 
    /*----------------------------
    imagesLoaded
    ------------------------------ */
    $('.grid').imagesLoaded( function() {
        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });	
        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
          }
        });
    });
    
    /*----------------------------
    portfolio menu
    ------------------------------ */
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    
    /* slider active  */ 
    $('.slider-active').owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        dots:false,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    /* about us active  */ 
    $('.about-img').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:1500,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* about us active  */ 
    $('.testimonial-all').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        margin:30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
    
    
	/*--
	Magnific Popup
	------------------------*/
	$('.img-poppu').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

    /*--------------------------
    Parallax
    ---------------------------- */	
    var parallaxeffect = $(window);
    parallaxeffect.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });
    
    
    /*--
    video popup
    ------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    
    
	/*--------------------------
    scrollUp
    ---------------------------- */
	var uptop = $('#toTop');
	
    win.on('scroll',function () {
        if(win.scrollTop()>200) {
            uptop.fadeIn();
        } else {
            uptop.fadeOut();
        }
    });
    uptop.on('click', function() {
        $("html,body").animate({
            scrollTop:0
        }, 500)
    });
    
    /*--------------------------
    counterUp
    ---------------------------- */	
     $('.about-counter').counterUp({
        delay: 10,
        time: 5000
    }); 
    
    
    /*
	CONTACT FORM VALIDATIONS SETTINGS
	========================================*/
	var CTForm = $('#contact_form');
    CTForm.validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        messages: {
            name: "What's your name?",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });   

	/*
	CONTACT FORM SCRIPT
	========================================*/
 	var CTSubmit = $('#contact_submit');
    CTForm.submit(function() {
        // submit the form
        if($(this).valid()){
           CTSubmit.button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactsubject: $('#contact_subject').val(),
                    contactmessage: $('#contact_message').val()
                },
                success: function() {
                   CTSubmit.button('reset');
                   CTSubmit.button('complete');
                },
                error: function() {
					CTSubmit.button('reset');
					CTSubmit.button('error');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        } else {
            CTSubmit.button('reset')
        }
        return false; 
    });
    
    
    
    
    
 
 
})(jQuery);  