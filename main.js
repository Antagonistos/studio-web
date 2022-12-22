document.getElementById('btn').onclick = () => {
	document.getElementById('header__inner').classList.toggle('menu__active')
}
const slider1 = document.querySelector('.porfolio-swiper');
const slider2 = document.querySelector('.rates-swiper');


const swiper2 = new Swiper(slider2, {
	loop: true,
	slidesPerView: 1,
	keyboard: {
		enabel: true,
	},
	navigation: {
		nextEl: '.swiper-button-more',
		prevEl: '.swiper-button-back',
	},
	centeredSlides: true,
	breakpoints: {
		1400: {
			slidesPerView: 3,
		},
	},
});


const swiper1 = new Swiper(slider1, {
	loop: true,
	slidesPerView: 1,
	keyboard: {
		enabel: true,
	},
	navigation: {
		nextEl: '.swiper-button-more',
		prevEl: '.swiper-button-back',
	},
});