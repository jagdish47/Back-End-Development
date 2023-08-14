const fs = require("fs");

fs.unlink("./another.txt", (err) => {
  if (err) {
    console.log("Error : ", err);
  } else {
    console.log("Deleting Successfully");
  }
});
