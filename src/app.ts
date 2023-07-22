const tasks: string[] = ["Read a book", "Go for a walk", "Prepare meals"];

const taskContainer: HTMLElement = document.querySelector(".section__list--js");
const taskInputElement: HTMLInputElement =
  document.querySelector(".form__input--js");
const addButtonElement: HTMLButtonElement =
  document.querySelector(".button--js");

const render = () => {
  taskContainer.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerHTML = task;
    taskContainer.appendChild(taskElement);
  });
};

const addTask = (task: string) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(taskInputElement.value);
  render();
});

render();
