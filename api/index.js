const express = require("express");
const cors = require("cors");
const parser = require('body-parser');

const connector = require("./database.connector");
const models = require("./models");

const { API_PORT } = process.env;
const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// ==================================
//  MongoDB Connexion
// ==================================

connector.init();

// ==================================
//  Express Routes
// ==================================

app.get("/persons", (req, res) => {
    models.Person.find({}, (err, persons) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`/persons ==> ${persons.length} results`);
            res.send(persons);
        }
    });
});

app.get("/todos", (req, res) => {
    models.Todo.find({}, (err, todos) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`/todos ==> ${todos.length} results`);
            res.send(todos);
        }
    });
});

app.get("/todos/new", (req, res) => {
    const todo = new models.Todo({
        id: 100,
        position: 8,
        label: 'Go to the store',
        date: new Date("2021-04-12T10:50:42.389Z"),
        personId: 2
    });
    todo.save(function (err) {
        if (err) {
            res.send("Error happened while saving the todo")
        }
        else {
            res.send("Added new todo")
        }
    });
});

app.get("/", (req, res) => res.send("Hello World"));

app.post("/todos", (req, res) => {
    console.log("post ===> ", req.body);
    res.sendStatus(200);
});

// ==================================
//  Run app
// ==================================

app.listen(API_PORT, () => console.log(`===> myAPI listening on port ${API_PORT}`));
