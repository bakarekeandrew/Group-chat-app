const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
connectDB();

//middleware to parse JSON bodies

app.use(express.json());

const userRoutes = require('./routes/userRoutes');

//use Routes
app.use('/api/users', userRoutes);   

app.get('/', (req, res) =>{
    res.json({message: "Welcome to the API"})
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});