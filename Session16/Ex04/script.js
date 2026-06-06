function isEven(n) {
  return n % 2 === 0;
}

let num = Number(prompt("Nhập một số nguyên bất kỳ:"));

if (isEven(num)) {
  alert(num + " là số chẵn");
} else {
  alert(num + " là số lẻ");
}
