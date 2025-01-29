const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// Middleware for serving static files
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home page route
app.get("/instagram", (req, res) => {
  res.render("home.ejs");
});

// Main page route
app.get("/main", (req, res) => {
  res.render("main.ejs");
});

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

// Roll dice route
app.get("/rolldice", (req, res) => {
  const dataBaseValue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { dataBaseValue });
});

// Middleware for handling 404 errors
app.use((req, res, next) => {
  const error = new Error("Page Not Found");
  error.status = 404;
  next(error);
});

// Error-handling middleware for all errors
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";

  console.error(`[${status}] ${message}`);
  res.status(status).render("error.ejs", { status, message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
