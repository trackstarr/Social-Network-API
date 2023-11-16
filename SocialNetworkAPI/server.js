const express = require("express");
const app = express();

app.use(express.urlencoded())
app.use(express.json())

const userRoutes = require('./SocialNetworkAPI/api/userRoutes');
const thoughtRoutes = require('./SocialNetworkAPI/api/thoughtRoutes');
const reactionSchema = require('./reactionSchema');

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(80);
