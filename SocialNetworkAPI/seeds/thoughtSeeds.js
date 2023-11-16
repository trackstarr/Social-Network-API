const Thought = require('./models/thought'); // replace with the actual path to your Thought model

const seedThoughts = async () => {
 const thought1 = new Thought({
   thoughtText: 'This is clearly an original thought',
   username: 'Brad'
   // add other fields as needed
 });

 const thought2 = new Thought({
   thoughtText: 'I can\'t believe someone else has already thought this',
   username: 'Chad'
   // add other fields as needed
 });

 // Save thoughts to the database
 await thought1.save();
 await thought2.save();
};

seedThoughts();
