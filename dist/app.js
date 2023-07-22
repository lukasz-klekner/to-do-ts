const tasks = [
    {
        name: "read a book",
        isDone: false,
    },
    {
        name: "go for a walk",
        isDone: true,
    },
    {
        name: "prepare meals",
        isDone: false,
    },
];
const taskContainer = document.querySelector(".section__list--js");
const taskInputElement = document.querySelector(".form__input--js");
const addButtonElement = document.querySelector(".button--js");
const render = () => {
    taskContainer.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        const taskLabelElement = document.createElement("label");
        const taskId = task.name.split(" ").join("-");
        taskLabelElement.setAttribute("for", `${taskId}`);
        taskLabelElement.innerHTML = task.name;
        const taskCheckboxElement = document.createElement("input");
        taskCheckboxElement.type = "checkbox";
        taskCheckboxElement.id = taskId;
        taskCheckboxElement.name = taskId;
        taskCheckboxElement.checked = task.isDone;
        taskElement.appendChild(taskLabelElement);
        taskElement.appendChild(taskCheckboxElement);
        taskContainer.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({
        name: taskName,
        isDone: false,
    });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskInputElement.value);
    render();
});
render();
