const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');


app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(3000, () => console.log('Now listening'));
