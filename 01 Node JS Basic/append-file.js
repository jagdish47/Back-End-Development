const fs = require("fs");

// fs.appendFileSync("./contact.txt", "\nAnshu = +91-9090909090", "utf-8");

try {
  fs.appendFileSync("./contact.txt", "\nYuvi = +91-1231231231", "utf-8");
  console.log("Appended Data Successfully");
} catch (error) {
  console.log("something went wrong in this");
}
