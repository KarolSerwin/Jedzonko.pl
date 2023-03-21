const localStorageRecipes = JSON.parse(localStorage.getItem("recipe")) || [];
const recipesNames = localStorageRecipes.map((element) => element.title);
const selectElements = document.querySelectorAll("select[name=dish]");
const saveButton = document.querySelector(
  ".app-content__main--new-plan_wrapper_title_button"
);

const nameElement = document.querySelector(
  ".app-content__main--new-plan_wrapper_specification_description .input_name"
);
const descriptionElement = document.querySelector(
  ".app-content__main--new-plan_wrapper_specification_description .input_description"
);
const numberOfWeekElement = document.querySelector(
  ".app-content__main--new-plan_wrapper_specification_description .input_week"
);

const newScheduleElement = document.querySelector(
  ".app-content__main--new-plan"
);

selectElements.forEach((select) => {
  recipesNames.forEach((name) => {
    const option = document.createElement("option");
    option.innerText = name;
    option.value = name;
    select.append(option);
  });
});

const daysOfWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const defaultSchedule = {
  title: "",
  description: "",
  numberOfWeek: 0,
  schedule: daysOfWeek.map((day) => {
    return {
      day: day,
      breakfast: "",
      secondBreakfast: "",
      soup: "",
      main: "",
      dinner: "",
    };
  }),
};

saveButton?.addEventListener("click", function () {
  const newSchedule = defaultSchedule;

  newSchedule.title = nameElement.value;
  newSchedule.description = descriptionElement.value;
  newSchedule.numberOfWeek = numberOfWeekElement.value;
  newSchedule.schedule = daysOfWeek.map((day) => {
    return {
      day: day,
      breakfast: document.querySelector(`select[id=breakfast_${day}]`).value,
      secondBreakfast: document.querySelector(`select[id=sec_breakfast_${day}]`)
        .value,
      soup: document.querySelector(`select[id=soup_${day}]`).value,
      main: document.querySelector(`select[id=main_${day}]`).value,
      dinner: document.querySelector(`select[id=supper_${day}]`).value,
    };
  });

  const schedulesLocalstorage = JSON.parse(localStorage.getItem("schedules"));
  if (schedulesLocalstorage) {
    localStorage.setItem(
      "schedules",
      JSON.stringify([...schedulesLocalstorage, newSchedule])
    );
  } else {
    localStorage.setItem("schedules", JSON.stringify([newSchedule]));
  }

  newScheduleElement.style.display = "none";
  window.location.reload();
});
