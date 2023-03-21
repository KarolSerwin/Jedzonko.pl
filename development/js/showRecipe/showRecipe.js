const olList = document.querySelector(".recipe__list .ol__list");

const arrayWithRecipes = JSON.parse(localStorage.getItem("recipe"));

function removeRecipe(id) {
  arrayWithRecipes.forEach((el) => {
    if (el.id === id) {
      arrayWithRecipes.splice(arrayWithRecipes.indexOf(el), 1);
    }
  });
  localStorage.setItem("recipe", JSON.stringify(arrayWithRecipes));
}

function deleteLi(trashIconBtn) {
  trashIconBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const li = this.parentElement.parentElement;
      li.remove();
      removeRecipe(li.id);
    });
  });
}

function editPlace(element) {
  const mainRecipeText = element.parentElement.parentElement.firstChild;
  const recipeText = element.parentElement.parentElement.firstChild.nextSibling;
  const id = element.parentElement.parentElement.id;

  mainRecipeText.addEventListener("keyup", (e) => {
    arrayWithRecipes.forEach((el, index) => {
      if (el.id === id) {
        arrayWithRecipes.splice(index, 1, {
          title: e.target.value,
          description: recipeText.value,
          ingredient: el.ingredient,
          instruction: el.instruction,
          id: el.id,
        });
      }
    });
    localStorage.setItem("recipe", JSON.stringify(arrayWithRecipes));
  });

  recipeText.addEventListener("keyup", (e) => {
    arrayWithRecipes.forEach((el, index) => {
      if (el.id === id) {
        arrayWithRecipes.splice(index, 1, {
          title: mainRecipeText.value,
          description: e.target.value,
          ingredient: el.ingredient,
          instruction: el.instruction,
          id: el.id,
        });
      }
    });
    localStorage.setItem("recipe", JSON.stringify(arrayWithRecipes));
  });
}

function editRecipe(editBtns) {
  editBtns.forEach((element) => {
    element.addEventListener("click", function () {
      const edit = this.parentElement.parentElement;
      const title = edit.getElementsByClassName("main__recipe--text")[0];
      const description = edit.getElementsByClassName("recipe__text")[0];
      description.removeAttribute("disabled");
      description.style.overflow = "auto";
      title.removeAttribute("disabled");
      title.style.overflow = "auto";
      title.focus();
    });
    element.addEventListener("click", function () {
      const element = this;
      editPlace(element);
    });
  });
}

let counter = 0;

function newLiElement(el) {
  const li = document.createElement("li");
  li.classList = "parent__element";
  li.setAttribute("id", el.id);

  const title = document.createElement("textarea");
  title.className = "main__recipe--text";
  title.textContent = el.title;
  title.setAttribute("disabled", true);

  const description = document.createElement("textarea");
  description.className = "recipe__text";
  description.textContent = el.description;
  description.setAttribute("disabled", true);

  const parentBtns = document.createElement("div");
  parentBtns.classList = "recipe__icons";

  const trashBtn = document.createElement("i");
  trashBtn.style.color = "rgb(189, 73, 50)";
  trashBtn.classList = "fas fa-trash-alt";

  const editBtn = document.createElement("i");
  editBtn.style.color = "rgb(255, 176, 59)";
  editBtn.classList = "fas fa-edit";

  parentBtns.append(editBtn, trashBtn);
  li.append(title, description, parentBtns);

  olList?.append(li);

  counter--;
  if (counter === 0) {
    console.log(counter);
    const trashIconBtn = document.querySelectorAll(
      ".recipe__list .fa-trash-alt"
    );
    deleteLi(trashIconBtn);

    const mainRecipeText = document.querySelectorAll(".main__recipe--text");
    const recipeText = document.querySelectorAll(".recipe__text");
    const editBtns = document.querySelectorAll(".fa-edit");

    editRecipe(editBtns);
  }
}

counter += arrayWithRecipes?.length;

arrayWithRecipes?.forEach((el) => {
  newLiElement(el);
});

export * from "./showRecipe";
