import { renderCategories } from "./helpers/render-categories.helpers.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
import { Category, Task } from "./types/types.js";

const category: Category[] = [
  Category.GENERAL,
  Category.ATHLETICS,
  Category.WORK,
  Category.HOBBY,
];

const tasks: Task[] = [
  {
    name: "read a book",
    isDone: false,
    category: Category.HOBBY,
  },
  {
    name: "go for a walk",
    isDone: true,
    category: Category.ATHLETICS,
  },
  {
    name: "run",
    isDone: false,
    category: Category.ATHLETICS,
  },
  {
    name: "prepare meals",
    isDone: false,
  },
];

const taskContainer: HTMLUListElement =
  document.querySelector(".section__list--js");
const taskInputElement: HTMLInputElement =
  document.querySelector(".form__input--js");
const addButtonElement: HTMLButtonElement =
  document.querySelector(".button--js");
const categoryContainer: HTMLUListElement = document.querySelector(
  ".form__categories-list--js"
);
let selectedCategory: Category;

const render = () => {
  taskContainer.innerHTML = "";
  categoryContainer.innerHTML = "";

  renderCategories(category, categoryContainer, updateCategory);

  renderTasks(tasks, taskContainer);
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

const updateCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

render();
