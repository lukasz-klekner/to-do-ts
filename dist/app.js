import { renderCategories } from "./helpers/render-categories.helpers.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
import { Category } from "./types/types.js";
const category = [
    Category.GENERAL,
    Category.ATHLETICS,
    Category.WORK,
    Category.HOBBY,
];
const tasks = [
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
const taskContainer = document.querySelector(".section__list--js");
const taskInputElement = document.querySelector(".form__input--js");
const addButtonElement = document.querySelector(".button--js");
const categoryContainer = document.querySelector(".form__categories-list--js");
let selectedCategory;
const render = () => {
    taskContainer.innerHTML = "";
    categoryContainer.innerHTML = "";
    renderCategories(category, categoryContainer, updateCategory);
    renderTasks(tasks, taskContainer);
};
const addTask = (task) => {
    tasks.push(task);
    taskInputElement.value = "";
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskInputElement.value,
        isDone: false,
        category: selectedCategory,
    });
    render();
});
const updateCategory = (newCategory) => {
    selectedCategory = newCategory;
};
render();
