const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET all users (temporary example)
router.get('/', async(req, res) => {
  try{
      const userData = await User.find({});
      res.status(200).json(userData)
      res.json("Data retrieved here!")
  }
  catch (error) {
    console.error("Error while adding user:", error); 
    res.status(500).json({ message: "Server Error", error: error.message });
  }
})
//post
 router.post('/add', async(req, res)=>{
    try{
      const add = await User.create({username:req.body.username})
      res.status(200).json("Username added successfully!")
    }
    catch(error){
      res.status(500).json(message.error)
    }
 })





module.exports = router;
