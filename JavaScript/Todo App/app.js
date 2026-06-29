const form = document.getElementById("todo-form");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("des");
const todoList = document.getElementById("todo-list");
const todoCount = document.getElementById("todo-count");
const emptyState = document.getElementById("empty-state");

const STORAGE_KEY = "todoAppItems";

let todos = loadTodos();

renderTodos();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!title) {
    titleInput.focus();
    return;
  }

  const newTodo = {
    id: Date.now(),
    title,
    description,
    completed: false,
  };

  todos.unshift(newTodo);
  saveTodos();
  renderTodos();
  form.reset();
  titleInput.focus();
});

todoList.addEventListener("click", (event) => {
  const target = event.target;
  const item = target.closest("li");

  if (!item) {
    return;
  }

  const id = Number(item.dataset.id);

  if (target.classList.contains("btn-delete")) {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos();
    renderTodos();
    return;
  }

  if (target.classList.contains("btn-edit")) {
    const todo = todos.find((entry) => entry.id === id);
    if (!todo) {
      return;
    }

    const updatedTitle = window.prompt("Edit title:", todo.title);
    if (updatedTitle === null) {
      return;
    }

    const cleanTitle = updatedTitle.trim();
    if (!cleanTitle) {
      window.alert("Title cannot be empty.");
      return;
    }

    const updatedDescription = window.prompt(
      "Edit description:",
      todo.description
    );

    if (updatedDescription === null) {
      return;
    }

    todo.title = cleanTitle;
    todo.description = updatedDescription.trim();
    saveTodos();
    renderTodos();
  }
});

todoList.addEventListener("change", (event) => {
  const target = event.target;

  if (!target.classList.contains("todo-check")) {
    return;
  }

  const item = target.closest("li");
  if (!item) {
    return;
  }

  const id = Number(item.dataset.id);
  const todo = todos.find((entry) => entry.id === id);

  if (!todo) {
    return;
  }

  todo.completed = target.checked;
  saveTodos();
  renderTodos();
});

function renderTodos() {
  todoList.innerHTML = "";

  if (todos.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }

  for (const todo of todos) {
    const item = document.createElement("li");
    item.className = "todo-item";
    item.dataset.id = String(todo.id);

    if (todo.completed) {
      item.classList.add("completed");
    }

    item.innerHTML = `
      <div class="todo-main">
        <input type="checkbox" class="todo-check" ${todo.completed ? "checked" : ""} aria-label="Mark task complete" />
        <div class="todo-content">
          <h3>${escapeHtml(todo.title)}</h3>
          <p>${todo.description ? escapeHtml(todo.description) : "No description"}</p>
        </div>
      </div>
      <div class="todo-actions">
        <button class="btn btn-edit" type="button">Edit</button>
        <button class="btn btn-delete" type="button">Delete</button>
      </div>
    `;

    todoList.appendChild(item);
  }

  const activeCount = todos.filter((todo) => !todo.completed).length;
  todoCount.textContent = `${activeCount} active ${activeCount === 1 ? "task" : "tasks"}`;
}

function loadTodos() {
  const savedTodos = localStorage.getItem(STORAGE_KEY);

  if (!savedTodos) {
    return [];
  }

  try {
    const parsed = JSON.parse(savedTodos);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
