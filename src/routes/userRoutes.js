const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET all users (temporary example)
router.get('/', async(req, res) => {
  try{
      const userData = await User.find({});
      res.json("Data retrieved here!")
      res.status(200).json(userData)
  }
  catch(error){
     res.status(501).json(error)
  }
})
//post
 router.post('/add', async(req, res)=>{
    try{
      const add = await User.create(req.body.title)
      res.status(200).json("Username added successfully!")
    }
    catch(error){
      res.status(501).json(error)
    }
 })





module.exports = router;
