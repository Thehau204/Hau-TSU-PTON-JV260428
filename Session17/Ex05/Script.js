let loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = function () {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "huanrose@gmail.com" && pass === "123456") {
    alert("Đăng nhập thành công!");
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
};
