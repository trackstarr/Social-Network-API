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

// Update a user
router.put('/:id', async (req, res) => {
   try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) {
         return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
 });
 

// Delete a user's thought
router.delete('/:userId/thoughts/:thoughtId', async (req, res) => {
   try {
      const user = await User.findById(req.params.userId);
      if (!user) {
         return res.status(404).json({ message: 'User not found' });
      }
      user.thoughts.pull(req.params.thoughtId);
      await user.save();
      res.json({ message: 'Thought deleted' });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
 });
 

// Add a friend
router.post('/:userId/friends/:friendId', async (req, res) => {
   try {
      const user = await User.findById(req.params.userId);
      if (!user) {
         return res.status(404).json({ message: 'User not found' });
      }
      user.friends.push(req.params.friendId);
      await user.save();
      res.json({ message: 'Friend added' });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
 });
 

// Remove a friend
router.delete('/:userId/friends/:friendId', async (req, res) => {
   try {
      const user = await User.findById(req.params.userId);
      if (!user) {
         return res.status(404).json({ message: 'User not found' });
      }
      user.friends.pull(req.params.friendId);
      await user.save();
      res.json({ message: 'Friend removed' });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
 });
 



module.exports = router;
