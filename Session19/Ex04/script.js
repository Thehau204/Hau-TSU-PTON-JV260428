let todos = JSON.parse(localStorage.getItem("todos")) || [];

let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");
let count = document.getElementById("count");
let clearAll = document.getElementById("clearAll");

// Lưu Local Storage
function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Render danh sách
function render() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <span onclick="editTodo(${index})">${todo}</span>
      <span class="delete" onclick="deleteTodo(${index})">🗑</span>
    `;

    todoList.appendChild(li);
  });

  count.innerText = `You have ${todos.length} pending tasks`;
}

render();

// Thêm todo
addBtn.onclick = function () {
  let text = todoInput.value.trim();
  if (text === "") return alert("Không được để trống!");

  todos.push(text);
  save();
  render();
  todoInput.value = "";
};

// Xóa 1 todo
function deleteTodo(i) {
  todos.splice(i, 1);
  save();
  render();
}

// Sửa todo
function editTodo(i) {
  let newText = prompt("Edit todo:", todos[i]);
  if (newText !== null && newText.trim() !== "") {
    todos[i] = newText.trim();
    save();
    render();
  }
}

// Clear All
clearAll.onclick = function () {
  todos = [];
  save();
  render();
};
