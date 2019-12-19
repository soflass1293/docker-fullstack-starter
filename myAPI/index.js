const express = require('express');

const dbConnector = require('./dbConnector');
const models = require('./models');

const app = express();
const { API_PORT } = process.env;

// ==================================
//  MongoDB Connexion
// ==================================

dbConnector.initDBConnection();


// ==================================
//  Express Routes
// ==================================

app.get('/persons', function (req, res) {
    models.Person.find({}, function (err, persons) {
        if (err) {
            console.log(err);
        } else {
            console.log(`/persons ==> ${persons.length} results`);
            res.send(persons);
        }
    })
});

app.get('/todos', function (req, res) {
    models.Todo.find({}, function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            console.log(`/todos ==> ${todos.length} results`);
            res.send(todos);
        }
    })
});

app.get('/', (req, res) => res.send('Hello World'));


// ==================================
//  Run app
// ==================================

app.listen(API_PORT, () => console.log(`===> myAPI listening on port ${API_PORT}`));
