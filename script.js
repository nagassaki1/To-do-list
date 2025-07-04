document.getElementById("add-button").addEventListener("click", function () {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("task-list");
  
      const li = document.createElement("li");
  
      const span = document.createElement("span");
      span.textContent = taskText;
      span.addEventListener("click", function () {
        li.classList.toggle("done");
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("delete");
      deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
      });
  
      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      taskInput.value = "";
    }
  });