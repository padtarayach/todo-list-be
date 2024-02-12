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

    createDate:{
        type:Date,
        default: new Date()
    },

    dueDate: {
        type: Date,
        required: true
    },

    type:{
        type:String,
        enum:['work','personal','life','school'],
        default:'personal'
    },

    status: {
        type : String,
        enum : ['pending', 'working', 'finish'],
        default: 'pending'
    }

})
const TodoModel = mongoose.model("Todo",todoSchema)

export {TodoModel}