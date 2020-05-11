let slider1 = document.querySelector(".slider1");
let slider2 = document.querySelector(".slider2");
let slider3 = document.querySelector(".slider3");

let buttonSlider1 = document.querySelector(".slider-button-1");
let buttonSlider2 = document.querySelector(".slider-button-2");
let buttonSlider3 = document.querySelector(".slider-button-3");



function showSlider1_2() {
	slider1.classList.remove("slider-show-first");

	slider1.classList.remove("slider-show");
	slider1.classList.remove("slider-anim-hide-class");
}

function showSlider1_3() {
	slider1.classList.remove("slider-show-first");

	slider1.classList.remove("slider-show");
	slider1.classList.remove("slider-anim-hide-class");
}

function showSlider2_1() {
	slider2.classList.remove("slider-show");
	slider2.classList.remove("slider-anim-hide-class");	
}

function showSlider2_3() {
	slider2.classList.remove("slider-show");
	slider2.classList.remove("slider-anim-hide-class");	
}

function showSlider3_1() {
	slider3.classList.remove("slider-show");
	slider3.classList.remove("slider-anim-hide-class");
}

function showSlider3_2() {
	slider3.classList.remove("slider-show");
	slider3.classList.remove("slider-anim-hide-class");
}

buttonSlider1.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (slider2.classList.contains('slider-show')) {

		slider2.classList.add("slider-anim-hide-class");
		slider1.classList.add("slider-show");
		buttonSlider2.classList.remove("slider-button-current");
		buttonSlider1.classList.add("slider-button-current");
		setTimeout(showSlider2_1, 500);
	}
	else {
		slider3.classList.add("slider-anim-hide-class");
		slider1.classList.add("slider-show");
		buttonSlider3.classList.remove("slider-button-current");
		buttonSlider1.classList.add("slider-button-current");
		setTimeout(showSlider3_1, 500);
	}
});

buttonSlider2.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (slider3.classList.contains('slider-show')) {

		slider3.classList.add("slider-anim-hide-class");
		slider2.classList.add("slider-show");
		buttonSlider3.classList.remove("slider-button-current");
		buttonSlider2.classList.add("slider-button-current");
		setTimeout(showSlider3_2, 500);
	}
	else {
		slider1.classList.add("slider-anim-hide-class");
		slider2.classList.add("slider-show");
		buttonSlider1.classList.remove("slider-button-current");
		buttonSlider2.classList.add("slider-button-current");
		setTimeout(showSlider1_2, 500);
	}
});

buttonSlider3.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (slider1.classList.contains('slider-show') || slider1.classList.contains('slider-show-first')) {

		slider1.classList.add("slider-anim-hide-class");
		slider3.classList.add("slider-show");
		buttonSlider1.classList.remove("slider-button-current");
		buttonSlider3.classList.add("slider-button-current");
		setTimeout(showSlider1_3, 500);
	}
	else {
		slider2.classList.add("slider-anim-hide-class");
		slider3.classList.add("slider-show");
		buttonSlider2.classList.remove("slider-button-current");
		buttonSlider3.classList.add("slider-button-current");
		setTimeout(showSlider2_3, 500);
	}
});