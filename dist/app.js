import { Category } from "./types/types";
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
    category.forEach((categoryName) => {
        const categoryElement = document.createElement("li");
        const categoryId = `category-${categoryName}`;
        const categoryRadioElement = document.createElement("input");
        categoryRadioElement.type = "radio";
        categoryRadioElement.name = "category";
        categoryRadioElement.value = categoryName;
        categoryRadioElement.id = `${categoryId}`;
        categoryRadioElement.addEventListener("change", (event) => {
            selectedCategory = categoryName;
        });
        const categoryLabelElement = document.createElement("label");
        categoryLabelElement.setAttribute("for", `${categoryId}`);
        categoryLabelElement.innerHTML = categoryName;
        categoryElement.appendChild(categoryRadioElement);
        categoryElement.appendChild(categoryLabelElement);
        categoryContainer.appendChild(categoryElement);
    });
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const taskLabelElement = document.createElement("label");
        const taskId = task.name.split(" ").join("-");
        taskLabelElement.setAttribute("for", `${taskId}`);
        taskLabelElement.innerHTML = task.name;
        const taskCheckboxElement = document.createElement("input");
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
render();
