import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";

export const addTask = (evento) => {
  evento.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");
  // asignar los valores
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");

  if (value === "" || date === "") {
    return;
  }
  // limpiar input
  input.value = "";
  calendar.value = "";

  const complete = false;

  // generar constante para almacenar value y dateFormat
  const taskObj = {
    value,
    dateFormat,
    complete,
    id: uuid.v4(),
  };

  // para que cada que se agregue una tarea aparezca como vacio y luego readTaks pinte las tareas
  list.innerHTML = "";

  //   para obtener la info desde el localStorage getItem
  //  poner el nombre de la llave que se quiere encontrar,
  // parsear a JSON porque lo que recibe es un string
  const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //si no hay info crear ela rreglo
  // agregar el task a la lista para uqe persista la info en
  taskList.push(taskObj);

  // recibe key y value
  // storage solo almacena strings, convertir con JSON.stringify
  // sessionStorage | |la info vive solo si la pestaña esta abierta
  // localStorage | solo se guarda el ultimo elemento
  // colver a almacenar las tareas ya actualizadas
  localStorage.setItem("tasks", JSON.stringify(taskList));

  displayTasks();
};

//listener
export const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement("li");
  task.classList.add("card");

  const taskContent = document.createElement("div");

  const check = checkComplete(id);
  if (complete) {
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon");
    check.classList.toggle("far");
  }

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);

  task.appendChild(taskContent);
  task.appendChild(deleteIcon(id));

  return task;
};
