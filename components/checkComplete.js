const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask);
  return i;
};

// Inmediately invoked function expression IIFE
// funciones que en cuanto se declaran se ejecutan
const completeTask = (event) => {
  const element = event.target;
  // toggle verifica si esta la clase, si no la quita
  element.classList.toggle("fas", "completeIcon");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
};

export default checkComplete;
