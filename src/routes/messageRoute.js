const express = require('express')
const router = express.Router();
const message = require('../models/message')

//get
router.get('/', async(req,res)=>{
    try{
       const messages = await message.find({})
       res.status(200).json("Data received successful")
    }catch(error){
        res.status(500).json({message: message.error})
    }
    
}) 

//post

router.post('/add', async(req,res)=>{
    try{
        const { senderId, receiverId, text } = req.body
        const message = await message.create({
            sender: senderId,
            receiver: receiverId,
            text    
    })
    res.status(200).json(message)

    }catch(error){
        res.status(500).json("Data failed to be saved")
    }
})


module.exports = router