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


//read
app.get('/', async (req, res) => {
    userModel.find({}, (err, user) => {
        if(err) {
            res.send(err);
        }

        res.send(user);
    })
})

//create
app.post('/create', (req, res) => {
    const Users = new userModel(req.body);
    Users
        .save()
        .then((Users) => {
            res.json(Users);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        })
});



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});