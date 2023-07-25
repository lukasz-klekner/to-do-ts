import { Task } from "../types/types";

export const renderTasks = (tasks: Task[], taskContainer: HTMLUListElement) => {
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
