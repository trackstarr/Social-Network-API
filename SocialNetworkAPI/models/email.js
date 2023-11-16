const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmailSchema = new Schema({
 email: {
   type: String,
   required: true,
   unique: true,
   validate: {
     validator: function(v) {
       // Use a regular expression to validate the email format
       const re = /\S+@\S+\.\S+/;
       return re.test(v);
     },
     message: props => `${props.value} is not a valid email!`
   }
 }
});

module.exports = mongoose.model('Email', EmailSchema);
