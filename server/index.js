const express = require('express');
const Cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/User');
const app = express();
const PORT = 4000;

mongoose.connect('mongodb+srv://adminUser:password1234@cluster0.lkzei.mongodb.net/user?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

mongoose.connection.once('open', () => {
    console.log('Mongodb connection established successfully!');
})
app.use(express.json());
app.use(Cors());







app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});