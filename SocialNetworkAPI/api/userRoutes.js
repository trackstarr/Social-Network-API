const express = require('express');
const router = express.Router();
const User = require('../models/user'); // import the User model

router.get('/', async (req, res) => {
  try {
     const users = await User.find({});
     res.json(users);
  } catch (err) {
     res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const user = new User({
     username: req.body.username,
     email: req.body.email
     // add other fields as needed
  });

  try {
     const newUser = await user.save();
     res.status(201).json(newUser);
  } catch (err) {
     res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
   try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
  });
  

module.exports = router;
