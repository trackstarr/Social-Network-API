const User = require('./models/user'); // replace with the actual path to your User model

const seedUsers = async () => {
 const user1 = new User({
   username: 'codemaster123',
   email: 'user1@example.com'
   
 });

 const user2 = new User({
   username: 'l33th4x0r',
   email: 'user2@example.com'
   
 });

 // Save users to the database
 await user1.save();
 await user2.save();
};

seedUsers();
