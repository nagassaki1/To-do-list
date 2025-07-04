/ Формат даты
function formatDate(date) {
  const options = { 
    year: 'numeric', month: 'short', day: 'numeric', 
    hour: '2-digit', minute: '2-digit', second: '2-digit' 
  };
  return date.toLocaleDateString('en-US', options);
}

// Добавление задачи
document.getElementById("add-button").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");

    const li = document.createElement("li");

    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;
    taskTextSpan.classList.add("task-text");
    taskTextSpan.style.cursor = "pointer";

    // ✅ Двойной клик для редактирования
    taskTextSpan.addEventListener("dblclick", function () {
      const input = document.createElement("input");
      input.type = "text";
      input.value = taskTextSpan.textContent;
      input.className = "edit-input";

      // Сохраняем при выходе из фокуса или на Enter
      input.addEventListener("blur", () => {
        if (input.value.trim() !== "") {
          taskTextSpan.textContent = input.value.trim();
        }
        taskTextSpan.style.display = "inline";
        input.remove();
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          input.blur();
        }
      });

      taskTextSpan.style.display = "none";
      li.insertBefore(input, taskTextSpan);
      input.focus();
    });

    taskTextSpan.addEventListener("click", function () {
      li.classList.toggle("done");
    });

    const dateSpan = document.createElement("span");
    dateSpan.textContent = "Added: " + formatDate(new Date());
    dateSpan.classList.add("task-date");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete");
    deleteBtn.title = "Delete task";

    deleteBtn.addEventListener("click", function () {
      li.style.animation = "fadeOut 0.3s forwards";
      setTimeout(() => {
        taskList.removeChild(li);
      }, 300);
    });

    li.appendChild(taskTextSpan);
    li.appendChild(dateSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }
})
