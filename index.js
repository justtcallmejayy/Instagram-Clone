// Index.js

const { name } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");
// Json data for instagram from backend

const port = 8080;
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// Using EJS with view engine
app.get("/", (req, res) => {
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
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  if (data) {
    console.log(data);
    res.render("instagram.ejs", { data });
  } else {
    console.log("No such user exists");
    res.render("error.ejs");
  }
});

//Below is the file for name of the followers who followed you

// Using EJS with view engine
app.get("/rolldice", (req, res) => {
  let dataBaseValue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { dataBaseValue });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log("app is Listening");
});

// About.ejs
//remeber to send only one request at a time
