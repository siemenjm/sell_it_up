const express = require('express');
const app = express();
const PORT = 4000;

// CONTROLLER
const productController = require('./controllers/products_controller');
// console.log(productController);

app.use(productController);

// -----

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