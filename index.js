import express from "express";
const app = express();
const port = 3000;

//respond to a GET request to the root URL
app.get("/", (req, res) => {
  res.send("This is response from the server for GET request.");
})
//instead of sending text we can send HTML
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
})
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
})
//this callback function will be called when the server receives a request
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
