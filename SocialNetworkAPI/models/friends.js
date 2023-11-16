const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = require('./user'); 
const FriendsSchema = new Schema({
 friends: [{
   type: Schema.Types.ObjectId,
   ref: 'User'
 }]
});

module.exports = mongoose.model('Friends', FriendsSchema);
