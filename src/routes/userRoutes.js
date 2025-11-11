const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET all users (temporary example)
router.get('/', async(req, res) => {
  try{
      const userData = await User.find({});
      res.status(200).json(userData)
  }
  catch(error){
     res.status(501).json(error)
  }
})





module.exports = router;
