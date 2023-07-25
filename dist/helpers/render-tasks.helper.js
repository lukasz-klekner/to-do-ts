export const renderTasks = (tasks, taskContainer) => {
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
