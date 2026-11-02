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

// Ejercicio 7
app.get("/year&pages/cervantes", (req, res) => {
  const book = books.find(b => b.author.toLowerCase() === "miguel de cervantes");
  if (book) {
    res.status(200).json({ pages: book.pages, year: book.year });
  } else {
    res.status(404).json({ error: "Libro no encontrado" });
  }
});

// Ejercicio 8
app.get("/country/count/spain", (req, res) => {
  const count = books.filter(b => b.country.toLowerCase() === "spain").length;
  res.status(200).json({ count });
});

// Ejercicio 9
app.get("/country/at-least/germany", (req, res) => {
  const exists = books.some(b => b.country.toLowerCase() === "germany");
  res.status(200).json(exists);
});

// Ejercicio 10
app.get("/pages/all-greater/200", (req, res) => {
  const allGreater = books.every(b => b.pages > 200);
  res.status(200).json(allGreater);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});