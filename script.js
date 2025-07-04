// Функция форматирования даты и времени
function formatDate(date) {
  const options = { 
    year: 'numeric', month: 'short', day: 'numeric', 
    hour: '2-digit', minute: '2-digit', second: '2-digit' 
  };
  return date.toLocaleDateString('en-US', options);
}

document.getElementById("add-button").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");
    
    // Создаём новый элемент li для задачи
    const li = document.createElement("li");
    
    // Создаём обёртку для текста задачи
    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;
    taskTextSpan.classList.add("task-text");
    taskTextSpan.style.cursor = "pointer";
    // При клике отмечаем или снимаем отметку о выполнении задачи
    taskTextSpan.addEventListener("click", function () {
      li.classList.toggle("done");
    });

    // Создаём элемент для даты/времени
    const dateSpan = document.createElement("span");
    dateSpan.textContent = "Added: " + formatDate(new Date());
    dateSpan.classList.add("task-date");
    
    // Кнопка для удаления задачи
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete");
    deleteBtn.title = "Delete task";
    
    // Добавляем анимацию для плавного удаления
    deleteBtn.addEventListener("click", function () {
      li.style.animation = "fadeOut 0.3s forwards";
      // Ждём завершения анимации, прежде чем удалять элемент из списка
      setTimeout(() => {
        taskList.removeChild(li);
      }, 300);
    });
    
    // Собираем элементы li
    li.appendChild(taskTextSpan);
    li.appendChild(dateSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Очищаем поле ввода
    taskInput.value = "";
  }
});
