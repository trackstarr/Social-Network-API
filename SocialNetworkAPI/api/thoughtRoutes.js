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
      // add other fields as needed
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
  

module.exports = router;
