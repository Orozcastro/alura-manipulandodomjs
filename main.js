// data-form-btn, atributo que se acrega a la etiqueta boton, lo que va despues del data es el nombre que le quieras asignar
const btn = document.querySelector("[data-form-btn]");

//listener
btn.addEventListener("click", (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  console.log(input.value);
});
f;
