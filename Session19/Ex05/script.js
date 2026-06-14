let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

let list = document.getElementById("list");
let saveBtn = document.getElementById("saveBtn");

// Lưu Local Storage
function save() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

// Render danh sách
function render() {
  list.innerHTML = "";

  bookmarks.forEach((item, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <span>
        <strong>${item.name}</strong> - ${item.url}
      </span>
      <span class="delete" onclick="removeBookmark(${index})">X</span>
    `;

    list.appendChild(li);
  });
}

render();

// Thêm bookmark
saveBtn.onclick = function () {
  let name = document.getElementById("name").value.trim();
  let url = document.getElementById("url").value.trim();

  if (name === "" || url === "") {
    alert("Không được để trống!");
    return;
  }

  bookmarks.push({ name, url });
  save();
  render();

  document.getElementById("name").value = "";
  document.getElementById("url").value = "";
};

// Xóa bookmark
function removeBookmark(i) {
  bookmarks.splice(i, 1);
  save();
  render();
}
