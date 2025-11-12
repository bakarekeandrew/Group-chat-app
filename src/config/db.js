const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://luckybrownandrew_db_user:123@cluster0.xubiwuh.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("Database Connected!")
})
.catch((error)=>{
    console.error("Database connection fail", error)
})

module.exports = mongoose