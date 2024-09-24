

const mongoose = require("mongoose")


// mongodb+srv://new:zoC0r9hs0WkQIPQ8@cluster0.9yali.mongodb.net/todos

mongoose.connect("mongodb+srv://new:zoC0r9hs0WkQIPQ8@cluster0.9yali.mongodb.net/todos")
const todoschema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})


const todo = mongoose.model("todos",todoschema)

module.exports ={
    todo:todo 
}