let students = [];

// 1. Thêm sinh viên mới
function addStudent() {
  let name = prompt("Nhập tên sinh viên:");
  let age = prompt("Nhập tuổi:");
  let id = prompt("Nhập mã số sinh viên:");

  let student = {
    name: name,
    age: age,
    id: id
  };

  students.push(student);
  console.log("Đã thêm sinh viên:", student);
}

// 2. Hiển thị danh sách sinh viên
function showStudents() {
  console.log("===== DANH SÁCH SINH VIÊN =====");
  for (let s of students) {
    console.log(`Tên: ${s.name}, Tuổi: ${s.age}, ID: ${s.id}`);
  }
}

// 3. Xóa sinh viên theo ID
function deleteStudent() {
  let deleteId = prompt("Nhập ID sinh viên cần xóa:");

  let index = students.findIndex(s => s.id === deleteId);

  if (index !== -1) {
    students.splice(index, 1);
    console.log("Đã xóa sinh viên có ID:", deleteId);
  } else {
    console.log("Không tìm thấy sinh viên có ID:", deleteId);
  }
}
