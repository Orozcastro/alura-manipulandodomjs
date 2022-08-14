// poner en el HTML en script type="module"
import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";

// data-form-btn, atributo que se acrega a la etiqueta boton, lo que va despues del data es el nombre que le quieras asignar
const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addTask);
displayTasks();
