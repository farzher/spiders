(function ($) { "use strict";


// Header Sticky
$(window).on('scroll',function() {
	var stickytop = $('#header.sticky-top .bg-transparent');
	var stickytopslide = $('#header.sticky-top-slide');
	
	if ($(this).scrollTop() > 1){  
		stickytop.addClass("sticky-on-top");
		stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('sticky-logo'));
	}
	else {
		stickytop.removeClass("sticky-on-top");
		stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('default-logo'));
	}
	
	if ($(this).scrollTop() > 180){  
		$('body').css('margin-top', '71px'/*$('#content').offset().top + 'px'*/)
		stickytopslide.find(".primary-menu").addClass("sticky-on");
		stickytopslide.find(".logo img").attr('src',stickytopslide.find('.logo img').data('sticky-logo'));
	}
	else{
		$('body').css('margin-top', 0)
		stickytopslide.find(".primary-menu").removeClass("sticky-on");
		stickytopslide.find(".logo img").attr('src',stickytopslide.find('.logo img').data('default-logo'));
	}
});


// // home click
// $('a[href="#home"]').on('click', () => {
// 	$('body').css('margin-top', 0)
// 	// $('body').scrollTop(0)
// })


// // Mobile Menu
// $('.navbar-toggler').on('click', function() {
// 	$(this).toggleClass('show');
// });
// $(".navbar-nav a").on('click', function() {
// 	$(".navbar-collapse, .navbar-toggler").removeClass("show");
// });

// // Overlay Menu & Side Open Menu
// $('.navbar-side-open .collapse, .navbar-overlay .collapse').on('show.bs.collapse hide.bs.collapse', function(e) {
//     e.preventDefault();
// }),
// $('.navbar-side-open [data-bs-toggle="collapse"], .navbar-overlay [data-bs-toggle="collapse"]').on('click', function(e) {
//    e.preventDefault();
//    $($(this).data('bs-target')).toggleClass('show');
// })




/*------------------------------------
    Isotope Portfolio Filter
-------------------------------------- */
$(window).on('load', function() {
	var $grid = $(".portfolio-filter").isotope({
		// layoutMode: 'masonry',
		layoutMode: 'packery',
		itemSelector: '.portfolio-item',
		// masonry: {
		packery: {
			gutter: 0,
			columnWidth: '.grid-sizer',
		},
	})
	$(window).on('resize', function() {$grid.isotope('layout') })
	$grid.imagesLoaded().progress( function() {$grid.isotope('layout') })


	$grid.isotope({filter: '.featured' })
	$(".portfolio-menu").find("a").on("click", function() {
		$(".portfolio-menu").find("a").removeClass("active")
		$(this).addClass("active")
		$grid.isotope({
			filter: $(this).attr("data-filter"),
		})
		return false
	})
})




/*------------------------------------
    Parallax Background
-------------------------------------- */

// broken on ios, so we need to not do it there
function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
if(!iOS()) {
	$(".parallax").each(function () {
		$(this).parallaxie({
			speed: 0.5,
		})
	})
}



/*------------------------------------
    Typed
-------------------------------------- */
$(".typed").each(function() {
	var typed = new Typed('.typed', {
		stringsElement: '.typed-strings',
		loop: true,
		typeSpeed: 100,
		backSpeed: 50,
		backDelay: 1500,
	})
})




/*------------------------------------
    WOW animation
-------------------------------------- */
$(window).on('load', function () {
	$(".wow").each(function() {
		if($(window).width() > 767) {
			var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 0,
				mobile: false,
				live: true,
			});
			new WOW().init();
		}
	})
})



/*------------------------------------
    YTPlayer YouTube Background
-------------------------------------- */
// $(".player").each(function () {
// 	$(this).mb_YTPlayer()
// })



/*------------------------
   tooltips
-------------------------- */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})



/*------------------------
   Scroll to top
-------------------------- */
$(function () {
	$(window).on('scroll', function(){
		if($(this).scrollTop() > 400) {
			$('#back-to-top').fadeIn()
		} else {
			$('#back-to-top').fadeOut()
		}
	})
})
$('#back-to-top').on("click", function() {
	$('html, body').animate({scrollTop:0}, 'slow')
	return false
})




})(jQuery)
