interface Task {
  name: string;
  isDone: boolean;
  category?: Category;
}

type Category = "general" | "hobby" | "athletics" | "work";

const category: Category[] = ["general", "hobby", "athletics", "work"];

const tasks: Task[] = [
  {
    name: "read a book",
    isDone: false,
    category: "hobby",
  },
  {
    name: "go for a walk",
    isDone: true,
    category: "athletics",
  },
  {
    name: "run",
    isDone: false,
    category: "athletics",
  },
  {
    name: "prepare meals",
    isDone: false,
  },
];

const taskContainer: HTMLElement = document.querySelector(".section__list--js");
const taskInputElement: HTMLInputElement =
  document.querySelector(".form__input--js");
const addButtonElement: HTMLButtonElement =
  document.querySelector(".button--js");
const categoryContainer: HTMLElement = document.querySelector(
  ".form__categories-list--js"
);
let selectedCategory: Category;

const render = () => {
  taskContainer.innerHTML = "";
  categoryContainer.innerHTML = "";

  category.forEach((categoryName) => {
    const categoryElement: HTMLElement = document.createElement("li");
    const categoryId = `category-${categoryName}`;

    const categoryRadioElement: HTMLInputElement =
      document.createElement("input");
    categoryRadioElement.type = "radio";
    categoryRadioElement.name = "category";
    categoryRadioElement.value = categoryName;
    categoryRadioElement.id = `${categoryId}`;

    categoryRadioElement.addEventListener("change", (event: Event) => {
      selectedCategory = categoryName;
    });

    const categoryLabelElement: HTMLLabelElement =
      document.createElement("label");
    categoryLabelElement.setAttribute("for", `${categoryId}`);
    categoryLabelElement.innerHTML = categoryName;

    categoryElement.appendChild(categoryRadioElement);
    categoryElement.appendChild(categoryLabelElement);

    categoryContainer.appendChild(categoryElement);
  });

  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");

    if (task.category) {
      taskElement.classList.add(task.category);
    }

    const taskLabelElement: HTMLLabelElement = document.createElement("label");
    const taskId = task.name.split(" ").join("-");

    taskLabelElement.setAttribute("for", `${taskId}`);
    taskLabelElement.innerHTML = task.name;

    const taskCheckboxElement: HTMLInputElement =
      document.createElement("input");
    taskCheckboxElement.type = "checkbox";
    taskCheckboxElement.id = taskId;
    taskCheckboxElement.name = taskId;
    taskCheckboxElement.checked = task.isDone;

    taskCheckboxElement.addEventListener("change", () => {
      task.isDone = !task.isDone;
    });

    taskElement.appendChild(taskLabelElement);
    taskElement.appendChild(taskCheckboxElement);

    taskContainer.appendChild(taskElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
  taskInputElement.value = "";
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    name: taskInputElement.value,
    isDone: false,
    category: selectedCategory,
  });
  render();
});

render();
