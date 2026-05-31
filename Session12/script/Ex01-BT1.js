let a = Number(prompt("Nhập a:"));
let b = Number(prompt("Nhập b:"));

if (b === 0) {
  console.log("Không thể chia cho 0");
} else if (a % b === 0) {
  console.log("a chia hết cho b");
} else {
  console.log("a KHÔNG chia hết cho b");
}
