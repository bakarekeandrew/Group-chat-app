const express = require('express');
const router = express.Router();


//getting the user displayed
router.get('/', (req, res) => {
    res.json({message: "All the user are displayed here"});
});

router.post('/', (req, res) => {});
  const { username } = req.body;

  res.json({message: `User ${username} added successfully`});


  module.exports = router;