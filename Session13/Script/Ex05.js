let arr = [];
let size = Math.floor(Math.random() * 11) + 10; // 10–20 phần tử

for (let i = 0; i < size; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sumEven += arr[i];
  } else {
    sumOdd += arr[i];
  }
}

alert("Tổng số chẵn: " + sumEven);
alert("Tổng số lẻ: " + sumOdd);
