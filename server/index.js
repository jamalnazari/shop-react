const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// اتصال به دیتابیس
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) console.log(err.message);
  else console.log("Connected to SQLite");
});

// ساخت جدول کاربران
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT,
    password TEXT
  )
`);

// ---------- ROUTES ----------

// گرفتن همه کاربران
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// اضافه کردن کاربر
app.post("/users", (req, res) => {
  const { username, email, password } = req.body;

  db.run(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
});

// حذف کاربر
app.delete("/users/:id", (req, res) => {
  db.run(
    "DELETE FROM users WHERE id = ?",
    [req.params.id],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ deleted: this.changes });
    }
  );
});

// اجرای سرور
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});