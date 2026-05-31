let input = prompt("Nhập dãy số:");
let arr = input.split(" ");
let max = Number(arr[0]);

for (let i = 1; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (num > max) {
        max = num;
    }
}

alert("Số lớn nhất là: " + max);