const express = require("express");
const app = express();
const database = require("./db");

app.get('/', (req, res) => {
   res.send('List all data');
});

app.get('/autores', (req, res) => {
    res.send('List all data');
});

app.get('/usuarios', (req, res) => {
    res.send('List all data');
});

app.get('/libros', (req, res) => {
    res.send('List all data');
});

app.get('/prestamos', (req, res) => {
    res.send('List all data');
});


app.listen(3000);
