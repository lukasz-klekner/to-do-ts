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
  new Task("read a book", false, Category.HOBBY),
  new Task("go for a walk", false, Category.ATHLETICS),
  new Task("run", true, Category.ATHLETICS),
  new Task("prepare meals!", false),
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
  addTask(new Task(taskInputElement.value, false, selectedCategory));
  render();
});

const updateCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

render();
