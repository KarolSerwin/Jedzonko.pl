import carouselOptions from "./carouselOptions";

const carouselValue = document.querySelector(".carousel__value");
const arrowLeft = document.querySelector(".carousel__arrow-left");
const arrowRight = document.querySelector(".carousel__arrow-right");

const FIRST_OBJECT_CAROUSEL = carouselOptions[0].id;
const LAST_OBJECT_CAROUSEL = carouselOptions[carouselOptions.length - 1].id;
const MOVE_ONE_STEP_RIGHT = 1;
const MOVE_ONE_STEP_LEFT = -1;

let counter = 0;

function getIdNumber(number) {
	counter += number;
	if (counter > LAST_OBJECT_CAROUSEL) counter = FIRST_OBJECT_CAROUSEL;
	if (counter < FIRST_OBJECT_CAROUSEL) counter = LAST_OBJECT_CAROUSEL;

	return counter;
}

function getRemoveAllChildrenCarousel() {
	const removeBeforeValue = [...carouselValue.children];
	return removeBeforeValue.forEach(el => el.remove());
}

function getSyntaxForCarousel(element, specificPlaceInTheObject, img = false) {
	const nameElement = document.createElement(element);
	carouselValue.append(nameElement);
	if (img) return nameElement.setAttribute("src", specificPlaceInTheObject);

	return (nameElement.textContent = specificPlaceInTheObject);
}

function getCreateValue(counter) {
	carouselOptions.map(el => {
		if (counter === el.id) {
			getSyntaxForCarousel("h2", el.header);
			if (el.img) return getSyntaxForCarousel("img", el.value, true);
			return getSyntaxForCarousel("p", el.value);
		}
	});
}

function getChangeCarousel(number) {
	getRemoveAllChildrenCarousel();
	getCreateValue(getIdNumber(number));
}

arrowRight.addEventListener("click", () =>
	getChangeCarousel(MOVE_ONE_STEP_RIGHT)
);
arrowLeft.addEventListener("click", () =>
	getChangeCarousel(MOVE_ONE_STEP_LEFT)
);

export * from "./carouselOptions";
