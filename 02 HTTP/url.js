const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else if (req.url === "/object") {
    const obj = {
      name: "Jagdish Kumawat",
      age: 24,
      gender: "Male",
    };

    res.end(JSON.stringify(obj));
  } else {
    res.end("404 Page Not Found");
  }
});

server.listen(8000, () => {
  console.log("Listening on port 8000");
});
