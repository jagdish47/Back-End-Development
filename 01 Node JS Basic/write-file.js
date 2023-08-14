const fs = require("fs");

// fs.writeFileSync("./one.txt", "How are you brother");

// fs.writeFileSync("./one.txt", "Hey There", "utf-8");

try {
  fs.writeFileSync("./one.txt", "Handling file using try and catch", "utf-8");
} catch (error) {
  console.log("Error : ", error);
}
