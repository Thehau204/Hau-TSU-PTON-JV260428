let weight = parseFloat(prompt("Nhập cân nặng (kg):"));
let height = parseFloat(prompt("Nhập chiều cao (m):"));

let bmi = weight / (height * height);
let result = "";

if (bmi < 18.5) {
  result = "Cân nặng thấp (gầy)";
} else if (bmi < 25) {
  result = "Bình thường";
} else if (bmi < 30) {
  result = "Thừa cân";
} else {
  result = "Béo phì";
}

alert("BMI của bạn là: " + bmi.toFixed(2) + "\nPhân loại: " + result);
