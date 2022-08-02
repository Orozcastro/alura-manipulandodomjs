(() => {
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

    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
    // console.log(value);
  };
  btn.addEventListener("click", createTask);

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
})();
