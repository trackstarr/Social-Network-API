const express = require('express');
const router = express.Router();
const Thought = require('../models/thought'); // import the Thought model

router.get('/', async (req, res) => {
   try {
      const thoughts = await Thought.find({}).populate('reactions');
      res.json(thoughts);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

router.post('/:thoughtId/reactions', async (req, res) => {
   const reaction = new Reaction({
      reactionBody: req.body.reactionBody,
      username: req.body.username
   });

   try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
         return res.status(404).json({ message: 'Thought not found' });
      }
      thought.reactions.push(reaction);
      await thought.save();
      res.status(201).json(reaction);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
});

// Update a user
router.put('/:id', async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      if (!user) {
         return res.status(404).json({ message: 'User not found' });
      }
      const thought = user.thoughts.id(req.params.thoughtId);
      if (!thought) {
         return res.status(404).json({ message: 'Thought not found' });
      }
      thought.set(req.body);
      await user.save();
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
      const thought = user.thoughts.id(req.params.thoughtId);
      if (!thought) {
         return res.status(404).json({ message: 'Thought not found' });
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
      if (user.friends.includes(req.params.friendId)) {
         return res.status(400).json({ message: 'Friend already exists' });
      }
      user.friends.push(req.params.friendId);
      await user.save();
      res.json({ message: 'Friend added' });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
 });
 
 router.delete('/:userId/friends/:friendId', async (req, res) => {
   try {
      const user = await User.findById(req.params.userId);
      if (!user) {
         return res.status(404).json({ message: 'User not found' });
      }
      const friend = user.friends.id(req.params.friendId);
      if (!friend) {
         return res.status(404).json({ message: 'Friend not found' });
      }
      user.friends.pull(req.params.friendId);
      await user.save();
      res.json({ message: 'Friend removed' });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
 });
 



      module.exports = router;
