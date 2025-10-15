const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//middleware to parse JSON bodies

app.use(express.json());

const userRoutes = require('./routes/userRoutes');

//use Routes
app.use('api/users', userRoutes);   

app.get('/', (req, res) =>{
    res.send("Hello World!");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});