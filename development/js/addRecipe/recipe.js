import { v4 as uuidV4 } from "uuid";

const btnSave = document.querySelector("#add-recipe--btn");

const inputTitle = document.querySelector("#recipe__title");
const inputDescription = document.querySelector("#recipe__description");

const instruction = document.querySelector("#instruction");
const btnPlusInstruction = document.querySelector("#plus--instruction");
const btnPlusEditInstruction = document.querySelector(
  "#plus--edit--instruction"
);

const listInstructions = document.querySelector(".steps-list__instruction");
const listIngredients = document.querySelector(".steps-list__ingredients");

const inputIngredient = document.querySelector("#ingredient");
const btnPlusIngredient = document.querySelector("#plus--ingredient");
const btnPlusEditIngredient = document.querySelector("#plus--edit--ingredient");

const addRecipieWrapper = document.querySelector(".add-recipe__container");

const addRecipieButton = document.querySelector(
  ".recipes__container .icon__plus"
);

const arrayWithEditsBtns = [];
const finalRecipe = [];

/// syantax
function syntaxCreateInstructionElement(input, list) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = input.value;
  span.setAttribute("id", uuidV4());
  input.value = "";

  const btnEdit = document.createElement("span");
  btnEdit.classList = "fas fa-edit";

  const btnDelete = document.createElement("span");
  btnDelete.classList = "fas fa-trash-alt";

  li.append(span, btnEdit, btnDelete);
  list.append(li);
}
/////////////

////delete btn
function listenerForAllDeleteBtns() {
  const allButtonsDelete = document.querySelectorAll(".fa-trash-alt");
  allButtonsDelete.forEach((btn) => {
    btn.addEventListener("click", function () {
      const parentElement = btn.parentElement;
      parentElement.remove();
    });
  });
}
/////////////

/////edit
function swapButtonsEditAndAdd(btnEdit, btnAdd, input, unfreezeInput) {
  btnEdit.style.display = "inline";
  btnAdd.style.display = "none";
  btnEdit.addEventListener("click", () => {
    input.value = "";
    input.blur();
    btnEdit.style.display = "none";
    btnAdd.style.display = "inline";
    unfreezeInput.removeAttribute("disabled");

    return arrayWithEditsBtns.splice(0, arrayWithEditsBtns.length);
  });
}

let text;

function getRightIdEdit(e, designateInput) {
  const textLi = document.getElementById(e.target.parentElement.firstChild.id);
  const input = e.target.parentElement.parentElement.parentElement.children[2];

  if (arrayWithEditsBtns.length > 1) arrayWithEditsBtns.shift();
  arrayWithEditsBtns.push(textLi);

  if (input.type === "textarea") {
    inputIngredient.setAttribute("disabled", "true");
    inputIngredient.value = "";
    instruction.focus();
    instruction.removeAttribute("disabled");
  } else {
    instruction.value = "";
    instruction.setAttribute("disabled", "true");
    inputIngredient.focus();
    inputIngredient.removeAttribute("disabled");
  }

  input.value = arrayWithEditsBtns[arrayWithEditsBtns.length - 1].textContent;
  input.addEventListener("keyup", (e) => {
    if (!arrayWithEditsBtns[arrayWithEditsBtns.length - 1]) return false;
    arrayWithEditsBtns[arrayWithEditsBtns.length - 1].textContent =
      e.target.value;
  });

  if (designateInput) {
    return swapButtonsEditAndAdd(
      btnPlusEditIngredient,
      btnPlusIngredient,
      inputIngredient,
      instruction
    );
  }
  return swapButtonsEditAndAdd(
    btnPlusEditInstruction,
    btnPlusInstruction,
    instruction,
    inputIngredient
  );
}

/////////////////////////
function listenerForAllEditBtns(designateInput) {
  const allButtonsEdit = document.querySelectorAll(".fa-edit");

  allButtonsEdit.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const event = e;
      getRightIdEdit(event, designateInput);
    });
  });
}
//////

btnPlusInstruction?.addEventListener("click", () => {
  if (instruction.value === "") return (instruction.style.borderColor = "red");
  instruction.style.borderColor = "black";
  syntaxCreateInstructionElement(instruction, listInstructions);
  listenerForAllDeleteBtns();
  listenerForAllEditBtns();
});

btnPlusIngredient?.addEventListener("click", () => {
  if (inputIngredient.value === "")
    return (inputIngredient.style.borderColor = "red");
  instruction.style.borderColor = "black";
  syntaxCreateInstructionElement(inputIngredient, listIngredients);
  listenerForAllDeleteBtns();
  listenerForAllEditBtns(true);
});

function isEmpty(arrayInstructions, arrayIngredients) {
  if (
    inputTitle.value !== "" &&
    inputDescription.value !== "" &&
    arrayInstructions.length !== 0 &&
    arrayIngredients.length !== 0
  )
    return true;
}

const arrayWithRecipe = [];

btnSave?.addEventListener("click", () => {
  const arrayInstructions = document.querySelectorAll(
    ".steps-list__instruction li"
  );
  const arrayIngredients = document.querySelectorAll(
    ".steps-list__ingredients li"
  );
  if (!isEmpty(arrayInstructions, arrayIngredients)) {
    return alert("complete each field");
  }
  const arrayOfInstruction = [];
  const arrayOfIngredients = [];

  arrayInstructions.forEach((el) =>
    arrayOfInstruction.push(el.firstChild.textContent)
  );
  arrayIngredients.forEach((el) =>
    arrayOfIngredients.push(el.firstChild.textContent)
  );

  const recipe = {
    id: uuidV4(),
    title: inputTitle.value,
    description: inputDescription.value,
    instruction: arrayOfInstruction,
    ingredient: arrayOfIngredients,
  };

  const allRecipes = localStorage.getItem("recipe");
  if (!allRecipes) {
    arrayWithRecipe.push(recipe);
    localStorage.setItem("recipe", JSON.stringify(arrayWithRecipe));
  } else {
    arrayWithRecipe.length = 0;
    JSON.parse(allRecipes).forEach((el) => arrayWithRecipe.push(el));
    arrayWithRecipe.push(recipe);
    localStorage.setItem("recipe", JSON.stringify(arrayWithRecipe));
  }
  addRecipieWrapper.style.display = "none";
  window.location.reload();
});

addRecipieButton?.addEventListener("click", function () {
  addRecipieWrapper.style.display = "block";
});

export * from "./recipe";
