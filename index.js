// Index.js

const { name } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");
// Json data for instagram from backend

const port = 8080;
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// Using EJS with view engine
app.get("/instagram", (req, res) => {
  //res.send("This is a Home ROOT!");
  res.render("home.ejs");
});

// //making instagram username EJS
// app.get("/ig/:username", (req, res) => {
//   let { username } = req.params;

//   const instaData = require("./data.json");

//   const data = instaData[name];
//   console.log(data);
//   res.render("instagram.ejs", {data});
//   //{username, followers, data: instaData[username]},
//   // const followers = ["Jay", "Meet", "John", "Priyank", "Kim", ];
// //  res.render("instagram.ejs", { data });
// });

// Code for creating a new instagram JSON DATA Rendering

// Route for Instagram clone user profile
app.get("/ig/:username", (req, res, next) => {
  const { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];

  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    const error = new Error(`User "${username}" not found.`);
    error.status = 404;
    next(error);
  }
});

//Below is the file for name of the followers who followed you

// Using EJS with view engine
app.get("/rolldice", (req, res) => {
  let dataBaseValue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { dataBaseValue });
});

// Middleware for handling 404 errors
app.use((req, res, next) => {
  const error = new Error("Page Not Found");
  error.status = 404;
  next(error);
});

// Error-handling middleware for all types of errors
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";

  console.error(`[${status}] ${message}`);
  res.status(status).render("error.ejs", { status, message });
});

// Below is the code for main page
app.get("/main", (req, res) => {
  res.render("main.ejs");
});


app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

// About.ejs
//remeber to send only one request at a time
