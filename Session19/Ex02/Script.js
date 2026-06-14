// Lấy dữ liệu từ Local Storage hoặc dùng dữ liệu mẫu
let tasks = JSON.parse(localStorage.getItem("tasks")) || [
  {
    id: 1,
    content: "Learn Javascript Session 01",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Anh Bách",
  },
  {
    id: 2,
    content: "Learn Javascript Session 2",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Lâm th",
  },
  {
    id: 3,
    content: "Learn CSS Session 1",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Hiếu Ci Ớt Ớt",
  },
];

// Lưu vào Local Storage
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render bảng
function render() {
  let tbody = document.getElementById("taskList");
  tbody.innerHTML = "";

  tasks.forEach(task => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${task.content}</td>
      <td>${task.dueDate}</td>
      <td>${task.status}</td>
      <td>${task.assignedTo}</td>
      <td>
        <button class="edit" onclick="editTask(${task.id})">Sửa</button>
        <button class="delete" onclick="deleteTask(${task.id})">Xóa</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

render();

// Thêm task
document.getElementById("addBtn").onclick = function () {
  let content = document.getElementById("content").value;
  let dueDate = document.getElementById("dueDate").value;
  let assignedTo = document.getElementById("assignedTo").value;
  let status = document.getElementById("status").value;

  if (!content || !dueDate || !assignedTo) {
    alert("Không được bỏ trống!");
    return;
  }

  let newTask = {
    id: Date.now(),
    content,
    dueDate,
    status,
    assignedTo
  };

  tasks.push(newTask);
  save();
  render();
};

// Xóa task
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  save();
  render();
}

// Sửa task
function editTask(id) {
  let task = tasks.find(t => t.id === id);

  let newContent = prompt("Content:", task.content);
  let newDue = prompt("Due date:", task.dueDate);
  let newAssign = prompt("Assigned to:", task.assignedTo);
  let newStatus = prompt("Status (Pending/Done):", task.status);

  if (newContent && newDue && newAssign && newStatus) {
    task.content = newContent;
    task.dueDate = newDue;
    task.assignedTo = newAssign;
    task.status = newStatus;

    save();
    render();
  }
}
