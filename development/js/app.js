import "./addRecipe/recipe";
import "./showRecipe/showRecipe";
import "./addSchedule/addSchedule";
import "./showSchedule/showSchedule";

// name form

const formElement = document.querySelector(
  ".app-content__main--first-entry_wrapper__form"
);

const formInputElement = document.querySelector(
  ".app-content__main--first-entry_wrapper__form--input"
);
const userNameElement = document.querySelector(".app-header__user-name");

const registerPanelElement = document.querySelector(
  ".app-content__main--first-entry"
);

const localUserName = localStorage.getItem("username");

const hideRegisterPanel = () => {
  registerPanelElement.style.display = "none";
};

const displayUserName = (text) => {
  userNameElement.innerText = text;
};

const setUserName = (userName) => {
  localStorage.setItem("username", userName);
};

if (localUserName) {
  hideRegisterPanel();
  displayUserName(localUserName);
} else {
  const onSubmitForm = (e) => {
    e.preventDefault();
    const name = formInputElement.value;
    displayUserName(name);
    setUserName(name);
    hideRegisterPanel();
  };
  formElement.addEventListener("submit", onSubmitForm);
}

//ZAMYKANIE PASKÓW INFORMACYJNYCH Z PRZESUNĘCIEM PRZYCISKÓW NA ŚRODEK

//ZMIENNIE / ELEMENTY

const appContentNotificationsContainer = document.querySelector(
  ".app-content__main--notifications-container"
);
const appContentMainContainer = document.querySelector(
  ".app-content__main--container"
);

// TABLICA Z BOXAMI: INFO, ALERT I CHECK
const notificationsBoxes = [...appContentNotificationsContainer.children];
let counter = 0;

function removeElement(parent) {
  parent.remove();
  counter++;
  getRemoveAllElement(counter);
}

notificationsBoxes.forEach((el) => {
  el.querySelector("a").addEventListener("click", function () {
    const parent = this;
    removeElement(parent.parentElement);
  });
});

function getRemoveAllElement(counter) {
  if (counter === notificationsBoxes.length) {
    return (
      (appContentNotificationsContainer.style.display = "none"),
      (appContentMainContainer.style.justifyContent = "center"),
      (appContentMainContainer.style.gap = "30px")
    );
  }
}

// schedule - new schedule button
const weekPlanElement = document.querySelector(".app-content__main--new-plan");

const addScheduleButton = document.querySelector(
  ".app-content__main--btn-add-plan"
);
addScheduleButton.addEventListener("click", function (event) {
  event.preventDefault();
  weekPlanElement.style.display = "flex";
});

const addRecepieButton = document.querySelector(
  ".app-content__main--btn-add-receipt"
);

const addRecipieElement = document.querySelector(".add-recipe__container");

addRecepieButton.addEventListener("click", function (event) {
  event.preventDefault();
  addRecipieElement.style.display = "block";
});

const countRecepiesElement = document.querySelector(".notify-recipes-count");

const getRecipiesLength = function () {
  if (localStorage.getItem("recipe")) {
    const count = JSON.parse(localStorage.getItem("recipe")).length;
    if (count === 1) {
      return "1 przepis";
    } else if (count < 5) {
      return count + " przepisy";
    } else {
      return count + " przepisów";
    }
  } else {
    return "0 przepisów";
  }
};

countRecepiesElement.innerText = getRecipiesLength();

// TWÓJ PLAN

const schedules = JSON.parse(localStorage.getItem("schedules")) || [];

const countElement = document.querySelector(
  ".app-content__main--week-plan-counter"
);
let currentIndex = 0;

const showCurrentSchedule = function (index) {
  schedules[index].schedule.forEach((element) => {
    const keys = Object.keys(element).slice(1);
    keys.forEach((key) => {
      document.querySelector(`.${element.day}-${key}`).innerText = element[key];
    });
  });
  countElement.innerText = schedules[index].numberOfWeek + ".";
};

showCurrentSchedule(currentIndex);

const prevCalendarButton = document.querySelector(
  ".app-content__main--week-plan-buttons-prev"
);
const nextCalendarButton = document.querySelector(
  ".app-content__main--week-plan-buttons-next"
);

nextCalendarButton?.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentIndex < schedules.length - 1) {
    console.log(schedules[currentIndex + 1]);
    currentIndex++;
    showCurrentSchedule(currentIndex);
  }
});

prevCalendarButton?.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentIndex !== 0) {
    currentIndex--;
    showCurrentSchedule(currentIndex);
  }
});
