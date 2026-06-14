let keyboard = document.getElementById("keyboard");
let screen = document.getElementById("screen");

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Tạo nút chữ
letters.forEach(char => {
  let btn = document.createElement("div");
  btn.className = "key";
  btn.innerText = char;

  btn.onclick = function () {
    screen.value += char;
  };

  keyboard.appendChild(btn);
});

// Tạo nút Xóa
let del = document.createElement("div");
del.className = "key delete";
del.innerText = "Xóa";

del.onclick = function () {
  screen.value = screen.value.slice(0, -1);
};

keyboard.appendChild(del);
