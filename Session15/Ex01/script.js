let arr = [3, 12, 5, 20, 7, 15, 1, 30, 9, 10];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) count++;
}

console.log("Có", count, "số ≥ 10");
