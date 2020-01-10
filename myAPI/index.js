const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const dbConnector = require("./dbConnector");
const models = require("./models");

const { API_PORT } = process.env;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ==================================
//  MongoDB Connexion
// ==================================

dbConnector.initDBConnection();

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

app.get("/", (req, res) => res.send("Hello World"));

app.post("/todos", (req, res) => {
    console.log("post ===> ", req.body);
    res.sendStatus(200);
});

// ==================================
//  Run app
// ==================================

app.listen(API_PORT, () => console.log(`===> myAPI listening on port ${API_PORT}`));
