const fs = require("fs");

const data = fs.readFileSync("./contact.txt", "utf-8");
console.log(data);

// try {
//   const data = fs.readFileSync("./contact.txt", "utf-8");
//   console.log("Data Successfully Read");
//   console.log(data);
// } catch (error) {
//   console.log("Failed to Read Data : ", error);
// }
