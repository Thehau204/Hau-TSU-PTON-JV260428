let original = {
  name: "Bob",
  age: 30
};

// Sao chép đối tượng
let copy = { ...original };

// Thay đổi thuộc tính name của copy
copy.name = "Charlie";

// In ra hai đối tượng
console.log("Original:", original);
console.log("Copy:", copy);
