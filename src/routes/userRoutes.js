const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET all users (temporary example)
router.get('/', async(req, res) => {
  try{
    const users = await User.find();
    res.json(users);
    res.json({ message: 'All users will be fetched here' });
  }catch(error){
    console.error("Failed to fetch the users", error.message)
    res.status(500).json({message: "Server error ", error })
  }
});

// POST new user (temporary example)
router.post('/', async(req, res) => {
    try{
       const { username } = req.body;
       const user = await User.create({username});
       res.json({ message: `User ${user.username} created successfully!`, user });
    }catch(err){
      console.log(err);
      res.status(500).json({message: 'Internal server error', error: err.message})
    }
});

module.exports = router;
