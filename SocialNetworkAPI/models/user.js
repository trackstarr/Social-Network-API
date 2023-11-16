const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 username: {
   type: String,
   unique: true,
   required: true,
   trim: true
 },
 email: {
   type: String,
   required: true,
   unique: true,
   match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
 },
 thoughts: [
   {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Thought'
   }
 ],
 friends: [
   {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User'
   }
 ]
}, {
 toJSON: {
   virtuals: true,
   getters: true
 },
 id: false
});

userSchema.virtual('friendCount').get(function() {
 return this.friends.length;
});



module.exports = mongoose.model('User', userSchema);
