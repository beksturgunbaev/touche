
let searchBg = document.querySelector('.bg');
if (isMobile) {
	searchBg.style.zIndex = -1;
	let menuParents = document.querySelectorAll('.menu__parent>a');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("click", function (e) {
			menuParent.parentElement.classList.toggle('_active');
			e.preventDefault();
		});
		let revistaArrow = document.querySelector(".revista__img");
		revistaArrow.addEventListener("click", function (e) {
			menuParent.parentElement.classList.remove('_active');
		});
		let tiendaArrow = document.querySelector(".tienda__img");
		tiendaArrow.addEventListener("click", function (e) {
			menuParent.parentElement.classList.remove('_active');
		});
	}
} else {
	let menuParents = document.querySelectorAll('.menu__parent');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("mouseenter", function (e) {
			menuParent.classList.add('_active');
			searchBg.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
			searchBg.style.display = 'block';
		});
		menuParent.addEventListener("mouseleave", function (e) {
			menuParent.classList.remove('_active');
			searchBg.style.backgroundColor = "rgba(0, 0, 0, 0)";
			searchBg.style.display = 'none';
		});
		// menuParent.addEventListener("click", function (e) {
		// 	menuParent.parentElement.classList.toggle('_active');
		// });
	}
}

// if (isMobile) {
// 	searchBg.style.zIndex = -1;
// 	let customParents = document.querySelectorAll('.custom__parent>a');
// 	for (let index = 0; index < customParents.length; index++) {
// 		const customParent = customParents[index];
// 		customParent.addEventListener("click", function (e) {
// 			customParent.parentElement.classList.toggle('_active');
// 			e.preventDefault();
// 		});
// 	}
// } else {
// 	let customParents = document.querySelectorAll('.custom__parent');
// 	for (let index = 0; index < customParents.length; index++) {
// 		const customParent = customParents[index];
// 		customParent.addEventListener("mouseenter", function (e) {
// 			customParent.classList.add('_active');
// 			searchBg.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
// 			searchBg.style.zIndex = 1;
// 		});
// 		customParent.addEventListener("mouseleave", function (e) {
// 			customParent.classList.remove('_active');
// 			searchBg.style.backgroundColor = "rgba(0, 0, 0, 0)";
// 			searchBg.style.zIndex = 0;
// 		});
// 		// customParent.addEventListener("click", function (e) {
// 		// 	customParent.parentElement.classList.toggle('_active');
// 		// });
// 	}
// }



let tabs = document.querySelectorAll("._tabs");
for (let i = 0; i < tabs.length; i++) {
	let tab = tabs[i];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");

	for (let k = 0; k < tabs_items.length; k++) {
		let tabs_item = tabs_items[k];
		if (isMobile) {
			tab.addEventListener("click", function (e) {
				tabs_item.classList.toggle('_active');
				tabs_blocks[k].classList.toggle('_active');
				// e.preventDefault();
			});
		} else {
			tabs_item.addEventListener("mouseenter", function (e) {
				for (let q = 0; q < tabs_items.length; q++) {
					let tabs_item = tabs_items[q];
					tabs_item.classList.remove('_active');
					tabs_blocks[q].classList.remove('_active');
				}
				tabs_item.classList.add('_active');
				tabs_blocks[k].classList.add('_active');
				// e.preventDefault();
			});
			tab.addEventListener("mouseleave", function (e) {
				tabs_item.classList.remove('_active');
				tabs_blocks[k].classList.remove('_active');
				// e.preventDefault();
			});
		}
	}
}

let tabs2 = document.querySelectorAll("._tab");
for (let i = 0; i < tabs2.length; i++) {
	let tab2 = tabs2[i];
	let tabs_items2 = tab2.querySelectorAll("._item-tabs");
	let tabs_blocks2 = tab2.querySelectorAll("._block-tabs");
	for (let k = 0; k < tabs_items2.length; k++) {
		let tabs_item2 = tabs_items2[k];
		if (isMobile) {
			tab2.addEventListener("click", function (e) {
				tabs_item2.classList.toggle('_active');
				tabs_blocks2[k].classList.toggle('_active');
				// e.preventDefault();
			});
		} else {
			tabs_item2.addEventListener("mouseenter", function (e) {
				for (let q = 0; q < tabs_items2.length; q++) {
					let tabs_item2 = tabs_items2[q];
					tabs_item2.classList.remove('_active');
					tabs_blocks2[q].classList.remove('_active');
				}
				tabs_item2.classList.add('_active');
				tabs_blocks2[k].classList.add('_active');
				// e.preventDefault();
			});
			tab2.addEventListener("mouseleave", function (e) {
				tabs_item2.classList.remove('_active');
				tabs_blocks2[k].classList.remove('_active');
				// e.preventDefault();
			});
		}
		
	}
}



let revistaArrow = document.querySelector(".revista__img");
revistaArrow.addEventListener("click", function (e) {
	revistaArrow.parentElement.classList.toggle('_active');
	let menuParents = document.querySelectorAll('.menu__parent>a');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		revistaArrow.addEventListener("click", function (e) {
			menuParent.parentElement.classList.remove('_active');
		});
	}
});
let tiendaArrow = document.querySelector(".tienda__img");
tiendaArrow.addEventListener("click", function (e) {
	tiendaArrow.parentElement.classList.toggle('_active');
	let menuParents = document.querySelectorAll('.menu__parent>a');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		tiendaArrow.addEventListener("click", function (e) {
			menuParent.parentElement.classList.remove('_active');
		});
	}
});





$(function () {
	$('.marquee').marquee({
		duration: 35000,
		startVisible: true,
		duplicated: true
	});
});


// function animateMarquee(el, duration) {
// 	const innerEl = el.querySelector('.marquee');
// 	const innerWidth = innerEl.offsetWidth;

// 	let start = performance.now();
// 	let progress;
// 	let translateX;

// 	requestAnimationFrame(function step(now) {
// 		progress = (now - start) / duration;
		
// 		if (progress > 0.99) {
// 			progress %= 1;
// 			start = now;
// 		}

// 		translateX = innerWidth * progress;

// 		innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
// 		requestAnimationFrame(step);
// 	});
// }
// const marquee1 = document.querySelector('.marquee-wrapper');
// animateMarquee(marquee1, 10000);


// if (isMobile) {
// 	let menuParents = document.querySelectorAll('.menu__parent>a');
// 	for (let index = 0; index < menuParents.length; index++) {
// 		const menuParent = menuParents[index];
// 		menuParent.addEventListener("click", function (e) {
// 			menuParent.parentElement.classList.toggle('_active');
// 			e.preventDefault();
// 		});
// 	}
// } else {
// 	let menuParents = document.querySelectorAll('.menu__parent');
// 	for (let index = 0; index < menuParents.length; index++) {
// 		const menuParent = menuParents[index];
// 		menuParent.addEventListener("mouseenter", function (e) {
// 			menuParent.classList.add('_active');

// 		});
// 		menuParent.addEventListener("mouseleave", function (e) {
// 			menuParent.classList.remove('_active');

// 		});
// 		// menuParent.addEventListener("click", function (e) {
// 		// 	menuParent.parentElement.classList.toggle('_active');
// 		// });
// 	}
// }


// new WOW().init();


var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
//=================
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
//=================
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}
let unlock = true;
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
let btnArrows = document.querySelectorAll('.arrow');
for (let i = 0; i < btnArrows.length; i++) {
	let btnArrow = btnArrows[i];
	btnArrow.addEventListener('click', function (e) {
		e.preventDefault();

		const href = this.getAttribute('href').substring(1);
		const scrollTarget = document.getElementById(href);

		const topOffset = document.querySelector('.header').offsetHeight;

		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
document.addEventListener('DOMContentLoaded', function () {
	let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
	let forms = document.querySelectorAll('form');
	if (forms.length > 0) {
		for (let i = 0; i < forms.length; i++) {
			const el = forms[i];
			el.addEventListener('submit', formSend);
		}
	}
	async function formSend(e) {
		// e.preventDefault();
		let btn = e.target;
		let form = btn.closest('form');
		let message = form.getAttribute('data-message');
		let error = formValidate(form);

		let formData = new FormData(form);

		if (error == 0) {
			formClean(form);
			if (message) {
				e.preventDefault();
			}
			e.preventDefault();
		} else {
			let formError = form.querySelectorAll('._error');
			if (formError && form.classList.contains('_goto-error')) {
				_goto(formError[0], 1000, 50);
			}
			e.preventDefault();
		}
	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		if (formReq.length > 0) {
			for (let i = 0; i < formReq.length; i++) {
				const el = formReq[i];
				error += formValidateInput(el);
			}
		}
		
		return error;
	}
	function formValidateInput(input) {
		let error = 0;
		let input_g_value = input.getAttribute('data-value');
		console.log(input.getAttribute("type"));
		
		if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
			if (input.value != input_g_value) {
				let em = input.value.replace(" ", "");
				
				input.value = em;
			}
			if (emailTest(input) || input.value == input_g_value) {
				formAddError(input);
				error++;
			} else {
				formRemoveError(input);
			}
		}  else {
			if (input.value == '' || input.value == input_g_value) {
				formAddError(input);
				error++;
			} else {
				formRemoveError(input);
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');

		let inputError = input.parentElement.querySelector('.form__error');
		if (inputError) {
			input.parentElement.removeChild(inputError);
		}
		let inputErrorText = input.getAttribute('data-error');
		if (inputErrorText && inputErrorText != '') {
			input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + inputErrorText + '</div>');
		}
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
		
		let inputError = input.parentElement.querySelector('.form__error');
		if (inputError) {
			input.parentElement.removeChild(inputError);
		}
	}
	function formClean(form) {
		let inputs = form.querySelectorAll('input,textarea');
		
		for (let index = 0; index < inputs.length; index++) {
			const el = inputs[index];
			el.parentElement.classList.remove('_focus');
			el.classList.remove('_focus');
			el.value = el.getAttribute('data-value');
		}
		let checkboxes = form.querySelectorAll('.checkbox__input');
		if (checkboxes.length > 0) {
			for (let index = 0; index < checkboxes.length; index++) {
				const checkbox = checkboxes[index];
				checkbox.checked = false;
			}
		}
		let selects = form.querySelectorAll('select');
		if (selects.length > 0) {
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_default_value = select.getAttribute('data-default');
				select.value = select_default_value;
				select_item(select);
			}
		}
	}

	// let viewPass = document.querySelectorAll('.form__viewpass');
	// for (let index = 0; index < viewPass.length; index++) {
	// 	const element = viewPass[index];
	// 	element.addEventListener("click", function (e) {
	// 		if (element.classList.contains('_active')) {
	// 			element.parentElement.querySelector('input').setAttribute("type", "password");
	// 		} else {
	// 			element.parentElement.querySelector('input').setAttribute("type", "text");
	// 		}
	// 		element.classList.toggle('_active');
	// 	});
	// }

	//Placeholers
	let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
	inputs_init(inputs);

	function inputs_init(inputs) {
		if (inputs.length > 0) {
			for (let i = 0; i < inputs.length; i++) {
				const input = inputs[i];
				const input_g_value = input.getAttribute('data-value');
				input_placeholder_add(input);
				if (input.value != '' && input.value != input_g_value) {
					input_focus_add(input);
				}
				input.addEventListener('focus', function (e) {
					if (input.value == input_g_value) {
						input_focus_add(input);
						input.value = '';
					}
					formRemoveError(input);
				});
				input.addEventListener('blur', function (e) {
					if (input.value == '') {
						input.value = input_g_value;
						input_focus_remove(input);
						if (input.classList.contains('_mask')) {
							input_clear_mask(input, input_g_value);
						}
					}
				});
			}
		}
	}
	function input_placeholder_add(input) {
		const input_g_value = input.getAttribute('data-value');
		if (input.value == '' && input_g_value != '') {
			input.value = input_g_value;
		}
	}
	function input_focus_add(input) {
		input.classList.add('_focus');
		input.parentElement.classList.add('_focus');
	}
	function input_focus_remove(input) {
		input.classList.remove('_focus');
		input.parentElement.classList.remove('_focus');
	}
	function input_clear_mask(input, input_g_value) {
		input.inputmask.remove();
		input.value = input_g_value;
		input_focus_remove(input);
	}
});
let slider_main = new Swiper('.main-screen__container', {
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 800,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());

