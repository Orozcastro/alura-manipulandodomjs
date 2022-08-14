import { displayTasks } from "./readTasks.js";

const deleteIcon = (id) => {
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const list = document.querySelector("[data-list]");
  // recibir los elementos de localstorage
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id === id);
  // eliminar el elemento selecionado
  tasks.splice(index, 1);
  //cada que se elimine una tarea aparezca como vacio y luego readTaks pinte las tareas
  list.innerHTML = "";

  // guardar el cambio de estado de eliminado en local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
};

export default deleteIcon;
