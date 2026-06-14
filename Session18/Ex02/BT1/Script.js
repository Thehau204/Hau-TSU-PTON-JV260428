let products = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Orange", count: 100 },
  { id: 3, name: "Butter", count: 100 }
];

// 1. Thêm đối tượng mới
products.push({ id: 4, name: "Apple", count: 50 });

// 2. Xóa đối tượng có id = 2
products = products.filter(p => p.id !== 2);

// 3. Cập nhật count = 0 cho id = 3
let item = products.find(p => p.id === 3);
if (item) item.count = 0;

// 4. Tìm từ khóa "Butter"
let keyword = "Butter";
let found = products.find(p => p.name === keyword);

if (found) {
  console.log("Tìm thấy:", found);
} else {
  console.log("Không có dữ liệu bạn tìm kiếm");
}

console.log(products);