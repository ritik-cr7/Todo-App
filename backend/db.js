const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://choudharyritik714:4QBjPYOjlh9INUwN@cluster0.jc5splc.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}