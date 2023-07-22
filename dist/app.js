const tasks = ["Read a book", "Go for a walk", "Prepare meals"];
const taskContainer = document.querySelector(".section__list--js");
const taskInputElement = document.querySelector(".form__input--js");
const addButtonElement = document.querySelector(".button--js");
const render = () => {
    taskContainer.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = task;
        taskContainer.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskInputElement.value);
    render();
});
render();
