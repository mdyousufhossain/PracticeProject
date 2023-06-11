const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    name: {
        type : String,
        required: [true,"add a task please"]
    },
    completed: {
        type : Boolean ,
        default: false, 
        required: true
    }
},{timestamps:true})

const Task = mongoose.model("Task", taskSchema)


module.exports = Task