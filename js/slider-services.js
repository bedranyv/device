let sliderService1 = document.querySelector(".services-slider-item-1");
let sliderService2 = document.querySelector(".services-slider-item-2");
let sliderService3 = document.querySelector(".services-slider-item-3");

let buttonService1 = document.querySelector(".services-button-1");
let buttonService2 = document.querySelector(".services-button-2");
let buttonService3 = document.querySelector(".services-button-3");



function showServiceSlider1_2() {
	sliderService1.classList.remove("services-slider-show-first");

	sliderService1.classList.remove("services-slider-show");
	sliderService1.classList.remove("services-slider-anim-hide-class");
}

function showServiceSlider1_3() {
	sliderService1.classList.remove("services-slider-show-first");

	sliderService1.classList.remove("services-slider-show");
	sliderService1.classList.remove("services-slider-anim-hide-class");
}

function showServiceSlider2_1() {
	sliderService2.classList.remove("services-slider-show");
	sliderService2.classList.remove("services-slider-anim-hide-class");	
}

function showServiceSlider2_3() {
	sliderService2.classList.remove("services-slider-show");
	sliderService2.classList.remove("services-slider-anim-hide-class");	
}

function showServiceSlider3_1() {
	sliderService3.classList.remove("services-slider-show");
	sliderService3.classList.remove("services-slider-anim-hide-class");
}

function showServiceSlider3_2() {
	sliderService3.classList.remove("services-slider-show");
	sliderService3.classList.remove("services-slider-anim-hide-class");
}

buttonService1.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (sliderService2.classList.contains('services-slider-show')) {

		sliderService2.classList.add("services-slider-anim-hide-class");
		sliderService1.classList.add("services-slider-show");

		buttonService2.classList.remove("services-button-active");

		buttonService1.classList.add("services-button-active");


		setTimeout(showServiceSlider2_1, 500);
	}
	else {
		sliderService3.classList.add("services-slider-anim-hide-class");
		sliderService1.classList.add("services-slider-show");


		buttonService3.classList.remove("services-button-active");

		buttonService1.classList.add("services-button-active");


		setTimeout(showServiceSlider3_1, 500);
	}
});

buttonService2.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (sliderService3.classList.contains('services-slider-show')) {

		sliderService3.classList.add("services-slider-anim-hide-class");
		sliderService2.classList.add("services-slider-show");


		buttonService3.classList.remove("services-button-active");

		buttonService2.classList.add("services-button-active");


		setTimeout(showServiceSlider3_2, 500);
	}
	else {
		sliderService1.classList.add("services-slider-anim-hide-class");
		sliderService2.classList.add("services-slider-show");

		buttonService1.classList.remove("services-button-active");


		buttonService2.classList.add("services-button-active");


		setTimeout(showServiceSlider1_2, 500);
	}
});

buttonService3.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (sliderService1.classList.contains('services-slider-show') || sliderService1.classList.contains('services-slider-show-first')) {

		sliderService1.classList.add("services-slider-anim-hide-class");
		sliderService3.classList.add("services-slider-show");

		buttonService1.classList.remove("services-button-active");


		buttonService3.classList.add("services-button-active");


		setTimeout(showServiceSlider1_3, 500);
	}
	else {
		sliderService2.classList.add("services-slider-anim-hide-class");
		sliderService3.classList.add("services-slider-show");


		buttonService2.classList.remove("services-button-active");

		buttonService3.classList.add("services-button-active");


		setTimeout(showServiceSlider2_3, 500);
	}
});