const tasks = ["Read a book", "Go for a walk", "Prepare meals"];
const taskContainer = document.querySelector(".section__list--js");
const render = () => {
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = task;
        taskContainer.appendChild(taskElement);
    });
};
render();
