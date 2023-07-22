interface Task {
  name: string;
  isDone: boolean;
}

const tasks: Task[] = [
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

const taskContainer: HTMLElement = document.querySelector(".section__list--js");
const taskInputElement: HTMLInputElement =
  document.querySelector(".form__input--js");
const addButtonElement: HTMLButtonElement =
  document.querySelector(".button--js");

const render = () => {
  taskContainer.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");

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

    taskElement.appendChild(taskLabelElement);
    taskElement.appendChild(taskCheckboxElement);

    taskContainer.appendChild(taskElement);
  });
};

const addTask = (taskName: string) => {
  tasks.push({
    name: taskName,
    isDone: false,
  });
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(taskInputElement.value);
  render();
});

render();
