const express = require('express')
const router = express.Router();
const Message = require('../models/message')

//get
router.get('/', async(req,res)=>{
    try{
       const message = await Message.find({})
       res.status(200).json("Data received successful")
    }catch(error){
        res.status(500).json({message: message.error})
    }
    
}) 

//post

router.post('/add', async(req,res)=>{
    try{
        const { senderId, receiverId, text } = req.body
        const message = await Message.create({
            sender: senderId,
            receiver: receiverId,
            text    
    })
    console.log(req.body)
    res.status(200).json(message)

    }catch(error){
        res.status(500).json("Data failed to be saved")
    }
})


module.exports = router