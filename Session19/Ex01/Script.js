let registerBtn = document.getElementById("registerBtn");

registerBtn.onclick = function () {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;

  // Lấy danh sách tài khoản từ Local Storage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // 1. Kiểm tra rỗng
  if (email === "" || password === "" || confirm === "") {
    alert("Không được bỏ trống!");
    return;
  }

  // 2. Kiểm tra confirm password
  if (password !== confirm) {
    alert("Mật khẩu xác nhận không khớp!");
    return;
  }

  // 3. Kiểm tra email tồn tại
  let exists = users.some(u => u.email === email);
  if (exists) {
    alert("Email đã tồn tại!");
    return;
  }

  // 4. Lưu tài khoản mới
  let newUser = { email, password };
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công!");
};
