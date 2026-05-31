let arr = [3, 7, 10, 15, 20];
let num = parseInt(prompt("Nhập số bất kỳ:"));
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    found = true;
    break;
  }
}

if (found) {
  alert("Bingo");
} else {
  alert("Chúc bạn may mắn lần sau");
}
