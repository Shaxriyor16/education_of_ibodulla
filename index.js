const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Static fayllar uchun
app.use(express.static(path.join(__dirname, "public")));

// Bosh sahifa
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Admin sahifa
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// Parent sahifa
app.get("/parent", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "parent.html"));
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
