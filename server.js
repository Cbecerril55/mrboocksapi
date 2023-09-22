const express = require("express");
const app = express();
const database = require("./db");

app.listen(5000, () => console.log("Express js server running!"));

app.get("/", (req, res) => {
  res.send("List all data");
});

app.get("/libros", (req, res) => {
  database.query("SELECT * FROM libros", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
    res.end();
  });
});

app.get("/autores", (req, res) => {
  database.query("SELECT * FROM autores", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
    res.end();
  });
});

app.get("/usuarios", (req, res) => {
  database.query("SELECT * FROM usuarios", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
    res.end();
  });
});

app.get("/prestamos", (req, res) => {
  database.query("SELECT * FROM prestamos", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
    res.end();
  });
});

app.listen(3000);
