const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#new-todo-input");
const list_element = document.querySelector("#todos");

console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value;
  if (!task) {
    alert("Please enter a task");
    return;
  }
  const task_element = document.createElement("div");
  task_element.classList.add("todo");
  const task_content = document.createElement("div");
  task_content.classList.add("content");

  task_element.appendChild(task_content);

  const task_input = document.createElement("input");
  task_input.classList.add("text");
  task_input.type = "text";
  task_input.value = task;
  task_input.setAttribute("readOnly", true);

  task_content.appendChild(task_input);

  const task_actions = document.createElement("div");
  task_actions.classList.add("actions");

  const task_edit = document.createElement("button");
  task_edit.classList.add("edit");
  task_edit.innerHTML = "Edit";
  task_actions.appendChild(task_edit);

  const task_delete = document.createElement("button");
  task_delete.classList.add("delete");
  task_delete.innerHTML = "Delete";
  task_actions.appendChild(task_delete);

  task_element.appendChild(task_actions);

  list_element.appendChild(task_element);
  input.value = "";

  task_edit.addEventListener("click", function () {
    if (task_edit.innerText.toLowerCase() === "edit") {
      task_input.removeAttribute("readOnly");
      task_input.focus();
      task_edit.innerText = "save";
    } else {
      task_input.setAttribute("readOnly", true);
      task_edit.innerText = "edit";
    }
  });

  task_delete.addEventListener("click", function () {
    list_element.removeChild(task_element);
  });
});
