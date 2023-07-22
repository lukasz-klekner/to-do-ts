const tasks: string[] = ["Read a book", "Go for a walk", "Prepare meals"];

const taskContainer: HTMLElement = document.querySelector(".section__list--js");

const render = () => {
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerHTML = task;
    taskContainer.appendChild(taskElement);
  });
};

render();
