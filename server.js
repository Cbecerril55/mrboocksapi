const express = require("express");
const app = express();
const database = require("./db");
var bodyParser = require("body-parser");

app.listen(5000, () => console.log("Express js server running!"));

//VISTAS
app.set("views", "./views");
app.set("view engine", "ejs");
//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { titulo: "APLICACION DE BIBLIOTECA" });
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

app.post("/agregar-libro", (req, res) => {
  database.query(`INSERT INTO Libros (Titulo, Genero) VALUES
  ("${req.body.titulo}","${req.body.genero}");`, (err, result, fields) => {
    if (err) {
      throw err;
    } else {
      console.log("Data logged succesfully!");
    }
  });
  res.redirect("/")
});

app.post("/agregar-autor", (req, res) => {
  database.query(`INSERT INTO Autores (Nombre, Nacionalidad) VALUES
  ("${req.body.nombre}","${req.body.nacionalidad}");`, (err, result, fields) => {
    if (err) {
      throw err;
    } else {
      console.log("Data logged succesfully!");
    }
  });
  res.redirect("/")
});
