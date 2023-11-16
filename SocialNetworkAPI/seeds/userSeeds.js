const User = require('./models/user'); // replace with the actual path to your User model

const seedUsers = async () => {
 const user1 = new User({
   username: 'user1',
   email: 'user1@example.com'
   // add other fields as needed
 });

 const user2 = new User({
   username: 'user2',
   email: 'user2@example.com'
   // add other fields as needed
 });

 // Save users to the database
 await user1.save();
 await user2.save();
};

seedUsers();
