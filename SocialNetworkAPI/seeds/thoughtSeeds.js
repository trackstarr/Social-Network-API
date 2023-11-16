const Thought = require('./models/thought'); // replace with the actual path to your Thought model

const seedThoughts = async () => {
 const thought1 = new Thought({
   thoughtText: 'This is a thought from user1',
   username: 'user1'
   // add other fields as needed
 });

 const thought2 = new Thought({
   thoughtText: 'This is a thought from user2',
   username: 'user2'
   // add other fields as needed
 });

 // Save thoughts to the database
 await thought1.save();
 await thought2.save();
};

seedThoughts();
