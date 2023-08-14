// const fs = require("fs");

// fs.writeFile("./two.txt", "Hello There Async", (error) => {
//   if (error) {
//     console.log("Error : ", error);
//   } else {
//     console.log("Data Written Successfully...");
//   }
// });

const fs = require("fs/promises");

async function writeFileAsync() {
  const content = "Hello, this is asynchronous file writing with promises!";
  try {
    await fs.writeFile("output.txt", content, "utf-8");
    console.log("File written asynchronously with promises.");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

writeFileAsync();
