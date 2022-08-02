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
  const content = `<div>
  <i class="far fa-check-square icon"></i>
  <span class="task">${value}</span>
</div>
<i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;
  list.appendChild(task);
  console.log(value);
};

btn.addEventListener("click", createTask);
