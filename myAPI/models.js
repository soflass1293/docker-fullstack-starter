const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: String,
    age: Number
});

const Person = mongoose.model('Person', PersonSchema, 'test');

exports.Person = Person;
