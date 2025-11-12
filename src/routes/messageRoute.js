const express = require(express)
const router = require(router)


//get
router.get('/', async(req,res)=>{
    try{
       const message = await User.find({})
       res.status(200).json("Data received successful")
    }catch(error){
        res.status(500).json({message: message.error})
    }
    
}) 