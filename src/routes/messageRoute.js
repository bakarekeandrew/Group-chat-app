const express = require('express')
const router = express.Router();
const Message = require('../models/message')

//get
router.get('/', async(req,res)=>{
    try{
       const messages = await Message.find({})
       .populate('sender', 'username')
       .populate('receiver', 'username')
       res.status(200).json(messages)
    }
    catch(error){
        res.status(500).json({message:error})
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
        console.error(error)
        res.status(500).json({message:"Data failed to be saved", error: error.message})
    }
})
router.put('/edit/:id', async(req,res)=>{
    const { id } = req.params
    const { text } = req.body
    const updatedMessage = await Message.findByIdAndUpdate(
        id,
        { text },
        { new:true }
    );
    if(!updatedMessage){
        res.status(404).json("message doesn't found")
    }
    res.status(200).json({message:"Message update successfully", data: updatedMessage});
})

//delete
router.delete('/delete', async(req,res)=>{
    id = req.params
    const message = await Message.findByIdAndDelete(id)
    if(!id){
        res.status(404).json("Id not found")
    }
    res.status(200).json("Message deleted successfully")
})



module.exports = router