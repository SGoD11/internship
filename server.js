const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Database
connectDB();

// Routes
app.use("/api", require("./routes/ConfigRoutes"));

// Frontend pages
app.get("/", (req, res) => res.render("index"));
app.get("/update", (req, res) => res.render("update"));

const PORT = 8080;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
