// poner en el HTML en script type="module"
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
// data-form-btn, atributo que se acrega a la etiqueta boton, lo que va despues del data es el nombre que le quieras asignar
const btn = document.querySelector("[data-form-btn]");

//listener
const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";

  const taskContent = document.createElement("div");
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);

  // task.innerHTML = content;
  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);
};
btn.addEventListener("click", createTask);
