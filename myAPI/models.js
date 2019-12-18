const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: String,
    age: Number
});

const TodoSchema = new Schema({
    label: String,
    date: Date
});

const Person = mongoose.model('Person', PersonSchema, 'person');
const Todo = mongoose.model('Todo', TodoSchema, 'todo');

module.exports = {
    Person,
    Todo
};
