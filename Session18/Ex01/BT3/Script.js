let student = {
  id: 1,
  name: "Nguyễn Văn A",
  gender: "nam",
  age: 20,
  mark: 8
};

let newStudent = {
  id: 2,
  name: "Trần Thị B",
  gender: "nữ",
  age: 21,
  mark: 9
};

let students = [student, newStudent];

console.log(students[1].name);
console.log(students[1].gender);
console.log(students[1].age);
console.log(students[1].mark);

let maxStudent = students[0];

for (let i = 1; i < students.length; i++) {
  if (students[i].mark > maxStudent.mark) {
    maxStudent = students[i];
  }
}

console.log("Học sinh điểm cao nhất:");
console.log(maxStudent);
