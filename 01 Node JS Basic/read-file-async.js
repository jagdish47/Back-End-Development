// const fs = require("fs");

// fs.readFile("./contact.txt", "utf-8", (data, error) => {
//   if (data) {
//     console.log(data);
//   } else {
//     console.log(error);
//   }
// });

const fs = require("fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("./contact.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readFile();
