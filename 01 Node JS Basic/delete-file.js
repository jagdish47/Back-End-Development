const fs = require("fs");

// fs.unlinkSync("./temp-one.txt");

try {
  fs.unlinkSync("./temp.txt");
  console.log("File Deleted Successfully");
} catch (error) {
  console.log("Error : ", error);
}
