const express = require('express');
const app = express();
const PORT = 4000;

// temp, simulated database
const products = ['t-shirt', 'shoes', 'necklace'];

// routes/controllers

app.get('/products/awesome', (req, res) => {
    res.send('Products are awesome!');
});

app.get('/products/:productIndex', (req, res) => {
    res.send(products[req.params.productIndex]);
});

app.get('/dogs/:name/:breed', (req, res) => {
    res.send(`${req.params.name} is a dog of breed ${req.params.breed}`);
});

app.get('/greetings', (req, res) => {
    res.send(`Hello, ${req.query.firstName} ${req.query.lastName}`);
});

app.get('/add', (req, res) => {
    const sum = parseInt(req.query.x) + parseInt(req.query.y);
    res.send(`${req.query.x} + ${req.query.y} = ${sum}`);
});

app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));