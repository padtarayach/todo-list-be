import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: new Date()
    },

    status: {
        type : String,
        enum : ['pending', 'working', 'finish'],
        default: 'pending'
    }

})
const TodoModel = mongoose.model("Todo",todoSchema)

export {TodoModel}