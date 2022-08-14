import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";

export const displayTasks = () => {
  // seleccionar la lista a donde vamoas a gregar los elementos ya almacenados
  const list = document.querySelector("[data-list]");
  const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
  const dates = uniqueDates(tasksList);
  orderDates(dates);

  dates.forEach((date) => {
    // convertir date a formato moment la fecha
    const dateMoment = moment(date, "DD/MM/YYYY");
    list.appendChild(dateElement(date));

    tasksList.forEach((task) => {
      const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
      const diff = dateMoment.diff(taskDate); // sacar la diferencia entre fechas
      if (diff === 0) {
        list.appendChild(createTask(task));
      }
    });
  });
};
