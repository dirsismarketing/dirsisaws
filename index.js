const express = require("express");
const app = express();
const port = 443;
const books = require("./libros");

app.use("/api/books", (req, res) => {
    res.status(200).json({estado: "OK", result: books});
    const book = {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        id: books.length + 1,
    }
    books.push(book);
});

app.use("/api/books/:id", (req, res) => {
    console.log("entro");
    const id = req.params.id;
    const libro = books.find ((x)=> x.id == id);
    res.status(200).json({estado: "OK", result: libro});
});

app.use("/api/books", (req, res) => {
    res.status(200).json({estado: "OK", result: books});
});

app.listen(port, () => {
    console.log("la aplicacion es corriendo ");
});

