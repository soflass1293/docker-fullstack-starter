const express = require('express');
const mongoose = require('mongoose');

const models = require('./models');

const app = express();
const port = 3000;

// TODO: externalize db connection in other file
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const dbURI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const db = mongoose.connection;

db.on('connecting', function () {
    console.log('connecting to MongoDB...');
});

db.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('connected', function () {
    console.log('MongoDB connected');
});

db.once('open', function () {
    console.log('MongoDB connection opened');
});

db.on('reconnected', function () {
    console.log('MongoDB reconnected');
});

db.on('disconnected', function () {
    console.log('MongoDB disconnected');
    setTimeout(() => {
        mongoose.connect(dbURI, { server: { auto_reconnect: true } });
    }, 5000);

});
mongoose.connect(dbURI, { server: { auto_reconnect: true } });

//Get the default connection
// const db = mongoose.connection;

app.get('/persons', function (req, res) {
    models.Person.find({}, function (err, persons) {
        if (err) {
            console.log(err);
        } else {
            console.log('retrieved list of persons', persons.length);
            res.send(persons);
        }
    })
});

app.get('/todos', function (req, res) {
    models.Todo.find({}, function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            console.log('retrieved list of todos', todos.length);
            res.send(todos);
        }
    })
});

app.get('/', (req, res) => res.send('Hello World tata !'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
