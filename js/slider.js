window.addEventListener('DOMContentLoaded', function() {
	
	let slideIndex = 1,
			slides = document.querySelectorAll('.slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.querySelectorAll('.dot');

	showSlides(slideIndex);
	function showSlides(n) {
		if ( n > slides.length ) {
			slideIndex = 1;
		}
		if ( n < 1 ) {
			slideIndex = slide.length;
		}
		slides.forEach((item) => item.style.display = 'none');
		// for (let i = 0; i < slides.length; i++) {
		// 	slides[i].display.style = 'none';
		// }
		dots.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}	
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function() {
		plusSlides(-1);
	});

	next.addEventListener('click', function() {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function(event) {
		for ( let i = 0; i < dots.length + 1; i++) {
			let target = event.target;
			if ( target.classList.contains('dot') && target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});

});