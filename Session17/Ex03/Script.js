let overlay = document.getElementById("overlay");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = function () {
  overlay.style.display = "block";
};

closeBtn.onclick = function () {
  overlay.style.display = "none";
};

overlay.onclick = function () {
  overlay.style.display = "none";
};

document.getElementById("modal").onclick = function (event) {
  event.stopPropagation();
};
