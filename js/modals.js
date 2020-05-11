let modalWriteToUs = document.querySelector(".modal-write-to-us");

let buttonWrite = document.querySelector(".about-us-contacts-write-button");

let buttonCloseWriteToUs = document.querySelector(".modal-write-to-us-close-button");

let modalForm = document.querySelector(".modal-form");

let inputName = document.querySelector(".modal-form-input-name");
let inputEmail = document.querySelector(".modal-form-input-email");
let inputMessage = document.querySelector(".modal-form-textarea");

let mainHeader = document.querySelector(".main-header");
let main = document.querySelector(".main");
let footer = document.querySelector(".footer");


function showAnimDel () {
	modalWriteToUs.classList.remove("modal-write-to-us-show-anim");
}

function addBlur () {
	mainHeader.classList.add("blur");
	main.classList.add("blur");
	footer.classList.add("blur");
}

function removeBlur () {
	mainHeader.classList.remove("blur");
	main.classList.remove("blur");
	footer.classList.remove("blur");
}


buttonWrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalWriteToUs.classList.add("modal-write-to-us-show");
	modalWriteToUs.classList.add("modal-write-to-us-show-anim");
	addBlur();
	setTimeout(showAnimDel, 300);
	
});

function modalWriteToUsClose () {
	modalWriteToUs.classList.remove("modal-write-to-us-show");
	modalWriteToUs.classList.remove("modal-write-to-us-close");
}

buttonCloseWriteToUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalWriteToUs.classList.add("modal-write-to-us-close");
	removeBlur();
	setTimeout(modalWriteToUsClose, 300)

});



// Сделаем форму валидную, чтоб не отправлять пустые поля
// Функция убирает анимацию тряски. В дальнейшем зададим таймер.
function animEmptyRemove() {
	modalWriteToUs.classList.remove("modal-write-to-us-error");
	modalWriteToUs.classList.add("modal-write-to-us-error-after");

	// console.log("Убираем анимацию тряски");
}

modalForm.addEventListener("submit", function (evt) {
	
	// Если значение введенного логин или пароля пустое, тогда запрещаем отправку формы и производим действие
	if (!inputName.value || !inputEmail.value || !inputMessage.value) {
		evt.preventDefault();
		modalWriteToUs.classList.add("modal-write-to-us-error");
		setTimeout(animEmptyRemove, 400);
	}

// Задаем красную заливку невведенному инпуту
	if (!inputName.value) {
		evt.preventDefault();
		inputName.classList.add("modal-form-input-invalid");
	}
	if (!inputEmail.value) {
		evt.preventDefault();
		inputEmail.classList.add("modal-form-input-invalid");
	}
	if (!inputMessage.value) {
		evt.preventDefault();
		inputMessage.classList.add("modal-form-input-invalid");
	}
});

// Убираем красную заливку (после попытки отправки пустого поля) при фокусировке на инпуте
inputName.addEventListener("focus", function (evt) {
	inputName.classList.remove("modal-form-input-invalid");
});

inputEmail.addEventListener("focus", function (evt) {
	inputEmail.classList.remove("modal-form-input-invalid");
});

inputMessage.addEventListener("focus", function (evt) {
	inputMessage.classList.remove("modal-form-input-invalid");
});




///////////////////////// MAP /////////////////////////

let modalMap = document.querySelector(".modal-map");

let buttonMap = document.querySelector(".about-us-map-button");

let buttonCloseMap = document.querySelector(".modal-map-close-button");


buttonMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.add("modal-map-show");
	addBlur();
});

function modalMapClose () {
	modalMap.classList.remove("modal-map-show");
	modalMap.classList.remove("modal-map-close");
}

buttonCloseMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	
	modalMap.classList.add("modal-map-close");
	removeBlur();

	setTimeout(modalMapClose, 700);
});
