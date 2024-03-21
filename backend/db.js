const mongoose = require('mongoose')

path = "mongodb+srv://codeWalker66:codeWalker_66@cluster0.5wn7fb3.mongodb.net/toDoApp"
mongoose.connect(path)

const todoSchema = mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    complete: {
        type: Boolean
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
