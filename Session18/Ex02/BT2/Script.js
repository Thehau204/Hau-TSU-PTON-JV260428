// let courses = [
//   { name: "HTML", complete: false },
//   { name: "CSS", complete: false },
//   { name: "Basic of javascript", complete: false },
//   { name: "Node package Manager (npm)", complete: false },
//   { name: "Git", complete: false }
// ];

// function printCourses() {
//   for (let i = 0; i < courses.length; i++) {
//     console.log(`${i + 1}. ${courses[i].name}`);
//     console.log(`Complete: ${courses[i].complete}`);
//     console.log("");
//   }
// }

while (true) {
  let input = prompt("Nhập C/R/U/D/E").toUpperCase();

  // C – Create
  if (input === "C") {
    let newName = prompt("Tên khóa học mới:");
    let newStatus = prompt("Hoàn thành? true/false:");
    courses.push({ name: newName, complete: newStatus === "true" });
    printCourses();
  }

  // R – Read
  else if (input === "R") {
    printCourses();
  }

  // U – Update
  else if (input === "U") {
    let pos = Number(prompt("Vị trí muốn update (1-5):")) - 1;

    if (courses[pos]) {
      let newName = prompt("Tên mới:");
      let newStatus = prompt("Hoàn thành? true/false:");
      courses[pos].name = newName;
      courses[pos].complete = newStatus === "true";
      printCourses();
    } else {
      alert("Không tồn tại vị trí này");
    }
  }

  // D – Delete
  else if (input === "D") {
    let pos = Number(prompt("Vị trí muốn xóa:")) - 1;

    if (courses[pos]) {
      courses.splice(pos, 1);
      printCourses();
    } else {
      alert("Không tồn tại vị trí này");
    }
  }

  // E – Exit
  else if (input === "E") {
    alert("Cảm ơn bạn đã đến với Rikkei Academy");
    break;
  }

  else {
    alert("Không hợp lệ");
  }
}
