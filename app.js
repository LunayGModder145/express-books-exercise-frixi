const express = require('express');
const books = require('./data/books.json'); // [] de los libros

const app = express(); // crea el server
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, funciona?');
});

// Ejercicio 1
app.get("/all", (req, res) => {
  res.status('200').json(books);
})

// Ejercicio 2
app.get("/first", (req, res) => {
  res.status('200').json(books[0]);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});