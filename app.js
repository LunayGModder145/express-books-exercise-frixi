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

// Ejercicio 3
app.get("/last", (req, res) => {
  res.status(200).json(books[books.length - 1]);
});

// Ejercicio 4
app.get("/middle", (req, res) => {
  res.status(200).json(books[49]);
});

// Ejercicio 5
app.get("/author/dante-alighieri", (req, res) => {
  const book = books.find(b => b.author.toLowerCase() === "dante alighieri");
  res.status(200).json(book ? book.title : "Libro no encontrado");
});

// Ejercicio 6
app.get("/country/charles-dickens", (req, res) => {
  const book = books.find(b => b.author.toLowerCase() === "charles dickens");
  res.status(200).json(book ? book.country : "Libro no encontrado");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});