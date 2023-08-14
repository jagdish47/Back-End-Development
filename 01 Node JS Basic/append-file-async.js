const fs = require("fs");

fs.appendFile("./contact.txt", "\nThis is data we are Appending", (error) => {
  if (error) {
    console.log("Getting Error", error);
  } else {
    console.log("You have Successfully Entered the data");
  }
});
