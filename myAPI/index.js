const express = require('express');
const mongoose = require('mongoose');

const models = require('./models');

const app = express();
const port = 3000;

//Set up default mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
    user: "admin",
    pass: "admin"
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/persons', function (req, res){
    models.Person.find({}, function(err, persons){
        if (err){
            console.log(err);
        } else  {
            res.render('user-list', persons);
            console.log('retrieved list of names', persons.length);
        }
    })
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
