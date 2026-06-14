let loginBtn = document.getElementById("loginBtn");
let toggle = document.getElementById("toggle");

// Lấy tài khoản đã đăng ký từ Local Storage
let users = JSON.parse(localStorage.getItem("users")) || [];

// 1. Hiện / Ẩn mật khẩu
toggle.onclick = function () {
  let pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
};

// 2. Xử lý đăng nhập
loginBtn.onclick = function () {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let remember = document.getElementById("remember").checked;

  // Kiểm tra rỗng
  if (email === "" || password === "") {
    alert("Không được bỏ trống!");
    return;
  }

  // Kiểm tra tài khoản tồn tại
  let user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Sai email hoặc mật khẩu!");
    return;
  }

  // Nếu chọn Remember → lưu trong 24h
  if (remember) {
    let expireTime = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("remember", JSON.stringify({ email, expireTime }));
  }

  alert("Đăng nhập thành công!");

  // Chuyển trang
  window.location.href = "home.html";
};

// 3. Tự động đăng nhập nếu còn hạn 24h
let saved = JSON.parse(localStorage.getItem("remember"));
if (saved && Date.now() < saved.expireTime) {
  alert("Tự động đăng nhập!");
  window.location.href = "home.html";
}
