const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", (event) => completeTask(event, id));
  return i;
};

// Inmediately invoked function expression IIFE
// funciones que en cuanto se declaran se ejecutan
const completeTask = (event, id) => {
  const element = event.target;
  // toggle verifica si esta la clase, si no la quita
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
  // ver la posicion del elemento en localStorage para marcar como completado
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id === id);

  tasks[index]["complete"] = !tasks[index]["complete"];

  // guardar el cambio de estado de comple en local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;
