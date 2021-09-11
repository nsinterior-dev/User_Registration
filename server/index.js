const express = require('express');
const Cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/User');
const app = express();
const PORT = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/user', {
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

// get id
app.get("/:id", (req, res) => {
    const id = req.params.id;
    userModel.findById(id, (err, user) => {
        res.json(user);
    })
    console.log(id);
})

//update
app.post('/:id', (req, res) => {
    const id = req.params.id;
    userModel.findById(id, (err, user) => {
        if (!user) res.status(404).send('User not found');
        else {
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.gender = req.body.gender;
            user.email = req.body.email;
            user.password = req.body.password;
            user.gender = req.body.gender;
            user
                .save()
                .then((user) => {
                    res.json(user);
                })
                .catch((err) => res.status(500).send(err.message));
        }
    });
    console.log(id);
});

//delete
app.delete("/delete/:id", async (req, res) => {
      const id = req.params.id;
      await userModel.findByIdAndRemove(id).exec();
      res.send("deleted");
  
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});