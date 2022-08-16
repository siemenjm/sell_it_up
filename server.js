const express = require('express');
const app = express();
const PORT = 4000;

// temp, simulated database
const products = [
    {
      name: 'Internet Friends',
      price: 29,
      image:
        'https://cdn.shopify.com/s/files/1/1297/1509/products/hero1_6de889fb-b540-49e4-b733-3af0baaa7f63_x1440.jpg?v=1571274629',
    },
    {
      name: 'Angry Pants',
      price: 35,
      image:
        'https://cdn.shopify.com/s/files/1/1297/1509/products/HERO_c5b0ec76-ad06-4cc7-a165-6129e11a8ff6_x1440.jpg?v=1571274622',
    },
    {
      name: 'Dead Cool',
      price: 50,
      image:
        'https://cdn.shopify.com/s/files/1/1297/1509/products/hero1_40030160-f468-4d50-8f30-c8b9733ce84e_x1440.jpg?v=1575020412',
    },
  ];

// routes/controllers

app.get('/products/awesome', (req, res) => {
    res.send('Products are awesome!');
});

app.get('/products/:productIndex', (req, res) => {
    res.send(products[req.params.productIndex]);
});

app.get('/products', (req, res) => {
    res.send(products);
});

app.get('/', (req,res) => {
    res.redirect('/products');
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