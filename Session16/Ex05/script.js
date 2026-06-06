function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

let input = prompt("Nhập chuỗi:");
alert(isPalindrome(input) ? "Chuỗi đối xứng" : "Chuỗi không đối xứng");
