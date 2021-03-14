const todoForm = document.querySelector(".js-todoForm"), todoInput = todoForm.querySelector("input"), todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";
const todos = []; // temp store

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌"
  const span = document.createElement("span");
  const newId = todos.length + 1;

  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  todoList.appendChild(li);
  li.id = newId;

  const todoObj = {
    "text": text,
    "id": newId
  }
  todos.push(todoObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currValue = todoInput.value;
  paintTodo(currValue);
  todoInput.value = "";
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if(loadedTodos !== null) {
    // There is TODOs
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach(function(todo) {
      paintTodo(todo.text);
    });
  } else {
    // There isn't TODOs
    // Nothing to do!
  }
}

loadTodos();
todoForm.addEventListener("submit", handleSubmit);
