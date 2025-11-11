const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


require('./config/db')

//middleware to parse JSON bodies

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const userRoutes = require('./routes/userRoutes');

//use Routes
app.use('/api/users', userRoutes);   




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});