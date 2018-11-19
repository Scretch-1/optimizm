$(function() {

	// preloader
	$(".loader").delay(400).fadeOut("slow");
	$(".loader-inner").fadeOut();

	// burger
	$(document).ready(function(){
		$('.menu-toggle').on('click',function(){
			$('.menu-toggle').toggleClass('active');
		});
	});

	// animatecss
	//waypoints official site http://imakewebthings.com/waypoints/
	// $("section h2").animated("zoomInUp"); 
	// $(".item-one").animated("flipInY"); 
	// $(".normal-text p").animated("fadeIn"); 
	// $(".big-text strong").animated("bounceInLeft"); 
	// $(".item-two").animated("flipInY"); 
	// $(".element-textgroup").animated("flipInX");
	// $(".element-command.type-one").animated("fadeInLeft");
	// $(".element-command.type-two").animated("fadeInRight");
	// $(".widget-one").animated("zoomIn");
	// $(".border-text").animated("zoomIn");
	// $(".footer-contain").animated("slideInUp");
	// -end  animatecss

	// page scroll to id
		// $(".all-element a").mPageScroll2id(); /*Пример подключения, ссылка на урок https://www.youtube.com/watch?v=YPlHvyYua8c&t=9s*/
	// -end page scroll to id

		$('.slider-one').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		fade: true,
		// autoplay: true,
		// autoplaySpeed: 4000,
		asNavFor: '.slider-two'
	});
	$('.slider-two').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		asNavFor: '.slider-one',
		centerMode: true,
		centerPadding: '0.3em',
		focusOnSelect: true,
		responsive: [
    {
      breakpoint: 991.98,
      settings: {
        vertical: false,
        centerPadding: false,
        arrows: false
      }
    }
  ]
	});

	$('#carousel1').carousel({
		// interval: 5500
		interval: false
	})

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	// animate btn
	[].map.call(document.querySelectorAll('.btn-pulse'), el=> {
		el.addEventListener('click',e => {
			e = e.touches ? e.touches[0] : e;
			const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
			el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop; 
			el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
		})
	})

	// title
	$(document).ready(function(){
		toolTiper();
	});

	function toolTiper(effect) {
		$('.tooltiper').each(function(){
			var eLcontent = $(this).attr('data-tooltip'),
			eLtop = $(this).position().top,
			eLleft = $(this).position().left;
			$(this).append('<span class="tooltip">'+eLcontent+'</span>');
			var eLtw = $(this).find('.tooltip').width(),
			eLth = $(this).find('.tooltip').height();
			$(this).find('.tooltip').css({
				"top": (0 - eLth - 20)+'px',
				"left":'-20px'
			});
		});
	}

	// ajax form
	// Обязательно присутствует вместе с "mail.php"
	// ссылка на урок https://www.youtube.com/watch?v=0bexJuzHFRo
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	// -end ajax form
	
});