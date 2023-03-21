const olList = document.querySelector(".schedule__list .ol__list");

const arrayWithSchedules = JSON.parse(localStorage.getItem("schedules")) || [];

const weekPlanElement = document.querySelector(".app-content__main--new-plan");

const addButton = document.querySelector(
  ".schedules__main--container .icon__plus"
);

arrayWithSchedules.forEach((schedule, index) => {
  const li = document.createElement("li");
  li.classList = "parent__element";
  li.setAttribute("id", `schedule_${index}`);

  const title = document.createElement("textarea");
  title.className = "main__schedule--text";
  title.textContent = schedule.title;
  title.setAttribute("disabled", true);

  const description = document.createElement("textarea");
  description.className = "schedule__text";
  description.textContent = schedule.description;
  description.setAttribute("disabled", true);

  const numberOfWeek = document.createElement("textarea");
  numberOfWeek.className = "schedule__week";
  numberOfWeek.textContent = schedule.numberOfWeek;
  numberOfWeek.setAttribute("disabled", true);

  const parentBtns = document.createElement("div");
  parentBtns.classList = "schedule__icons";

  const trashBtn = document.createElement("i");
  trashBtn.style.color = "rgb(189, 73, 50)";
  trashBtn.classList = "fas fa-trash-alt";

  trashBtn.addEventListener("click", () => {
    const newArray = [...arrayWithSchedules].filter(
      (element, newIndex) => index !== newIndex
    );
    localStorage.setItem("schedules", JSON.stringify(newArray));
    window.location.reload();
  });

  parentBtns.append(trashBtn);
  li.append(title, description, numberOfWeek, parentBtns);
  olList?.append(li);
});

addButton?.addEventListener("click", function () {
  weekPlanElement.style.display = "flex";
});

export * from "./showSchedule";
